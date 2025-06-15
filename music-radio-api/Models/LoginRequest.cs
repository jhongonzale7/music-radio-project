using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace music_radio_api.Models
{
    public class LoginRequest
    {
        public string NumIdentificacion { get; set; }
        public string Password { get; set; }
    }
}
