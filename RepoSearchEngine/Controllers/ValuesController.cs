using Newtonsoft.Json;
using RepoSearchEngine.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.SessionState;

namespace RepoSearchEngine.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*", SupportsCredentials = true)]
    [SessionState(SessionStateBehavior.Required)]
    public class ValuesController : ApiController
    {
        [System.Web.Http.HttpGet]
        public string getAllFavorites()
        {
            if (HttpContext.Current.Session.IsNewSession)
                return new Repo("", "", 0).ToString();

            return JsonConvert.SerializeObject(HttpContext.Current.Session["RepoList"]);
        }

        public string addToRepoList(string repo_name, string owner_avatar, int repo_id)
        {
            List<Repo> myRepos = new List<Repo>();
            Repo repo = new Repo(repo_name, owner_avatar, repo_id);
            if (HttpContext.Current.Session.IsNewSession)
            {
                Console.WriteLine(HttpContext.Current.Session.SessionID);
                myRepos.Add(repo);
                HttpContext.Current.Session["RepoList"] = myRepos;
            }
            else
            {
                myRepos = (List<Repo>)HttpContext.Current.Session["RepoList"];
                myRepos.Add(repo);
                HttpContext.Current.Session["RepoList"] = myRepos;
            }

            return JsonConvert.SerializeObject(HttpContext.Current.Session["RepoList"]); // myRepos.toJson; //Session["test11"].ToString();
        }
    }
}
