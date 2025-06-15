using System;
using System.Text.Json;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using music_radio_api.Models;
using music_radio_api.Services;

namespace music_radio_api.Controllers
{
    [ApiController]
    [Route("auth")]
    public class AuthController : ControllerBase
    {
        private readonly UserRepository _repo;
        private readonly ILogger<AuthController> _logger;

        /// <summary>
        /// Inyecta UserRepository y Logger.
        /// </summary>
        public AuthController(UserRepository repo, ILogger<AuthController> logger)
        {
            _repo = repo;
            _logger = logger;
        }

        /// <summary>
        /// Registra un nuevo usuario y lo persiste en users.json.
        /// </summary>
        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            try
            {
                // --- validaciones (igual que antes) ---
                if (string.IsNullOrEmpty(user.NumIdentificacion) || user.NumIdentificacion.Length > 15)
                    return BadRequest("Número de identificación inválido");
                // … resto de validaciones …

                if (_repo.GetById(user.NumIdentificacion) != null)
                    return BadRequest("Ya existe un usuario con ese número de identificación");

                _repo.Add(user);
                return Ok("Usuario registrado exitosamente");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al registrar usuario");
                return StatusCode(500, "Error interno, intente más tarde");
            }
        }

        /// <summary>
        /// Autentica al usuario y abre una sesión válida por 30 min.
        /// </summary>
        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequest login)
        {
            try
            {
                var user = _repo.GetById(login.NumIdentificacion);
                if (user == null || user.Password != login.Password)
                    return Unauthorized("Usuario o contraseña incorrectos");

                user.Password = "";
                HttpContext.Session.SetString("User", JsonSerializer.Serialize(user));
                return Ok(user);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al autenticar usuario");
                return StatusCode(500, "Error interno, intente más tarde");
            }
        }

        /// <summary>
        /// Devuelve el usuario actualmente en sesión.
        /// </summary>
        [HttpGet("me")]
        public IActionResult Me()
        {
            var json = HttpContext.Session.GetString("User");
            if (string.IsNullOrEmpty(json))
                return Unauthorized("No has iniciado sesión");
            var user = JsonSerializer.Deserialize<User>(json);
            return Ok(user);
        }

        /// <summary>
        /// Cierra la sesión del usuario.
        /// </summary>
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            HttpContext.Session.Clear();
            return Ok("Sesión cerrada");
        }
    }
}
