using SGK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SGK.Controllers;

namespace SGK.Areas.Sys.Controllers
{
    public class AccountController : BaseController
    {
        // GET: Sys/Account
        public ActionResult Index()
        {
            var user = from a in db.vw_Account where 1 == 1 select a;
            ViewBag.gridAccount = user.ToList();
            return View();
        }
    }
}