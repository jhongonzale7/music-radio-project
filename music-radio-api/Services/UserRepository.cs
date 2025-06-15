using System.Text.Json;
using music_radio_api.Models; 
  
namespace music_radio_api.Services
{
    public class UserRepository
    {
        private const string FilePath = "users.json";
        private readonly List<User> _users;

        public UserRepository()
        {
            if (File.Exists(FilePath))
            {
                var json = File.ReadAllText(FilePath);
                _users = JsonSerializer.Deserialize<List<User>>(json) ?? new List<User>();
            }
            else
            {
                _users = new List<User>();
            }
        }

        public IEnumerable<User> GetAll() => _users;

        public User? GetById(string id) =>
            _users.FirstOrDefault(u => u.NumIdentificacion == id);

        public void Add(User user)
        {
            _users.Add(user);
            SaveToFile();
        }

        private void SaveToFile()
        {
            var json = JsonSerializer.Serialize(_users, new JsonSerializerOptions { WriteIndented = true });
            File.WriteAllText(FilePath, json);
        }
    }
}
