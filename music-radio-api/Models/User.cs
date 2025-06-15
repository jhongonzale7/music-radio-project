using System;

namespace music_radio_api.Models
{
    public class User
    {
        public string NumIdentificacion { get; set; }
        public string Password { get; set; }
        public string Nombre { get; set; }
        public string Correo { get; set; }
        public string Direccion { get; set; }
        public string Ciudad { get; set; }
        public string Telefono { get; set; }
    }
}
