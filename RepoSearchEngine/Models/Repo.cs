using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RepoSearchEngine.Models
{
    public class Repo
    {
        [JsonProperty]
        string repo_name;
        [JsonProperty]
        string owner_avatar;
        [JsonProperty]

        int repo_id;

        public Repo(string repo_name, string owner_avatar, int repo_id)
        {
            this.owner_avatar = owner_avatar;
            this.repo_id = repo_id;
            this.repo_name = repo_name;
        }
    }
}