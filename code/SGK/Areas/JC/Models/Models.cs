using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SGK.Areas.JC.Models
{
    public class ddlModel
    {
        public int value { get; set; }
        public string text { get; set; }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="value">值</param>
        /// <param name="text">名称</param>
        public ddlModel(int value, string text)
        {
            this.value = value;
            this.text = text;
        }
    }

    public class SearchModel
    {
        public string FJH { get; set; }
        public string SSYQ { get; set; }
        public string SSLD { get; set; }
        public List<string> data { get; set; }
    }

    public class ModifyModel
    {
        public string ID { get; set; }
        public string Campus { get; set; }
        public string Region { get; set; }
        public string SSLD { get; set; }
        public string FJH { get; set; }
        public int SSLX { get; set; }
        public List<ddlModel> SSLX_ddlList = new List<ddlModel>();
        public string ZSFY { get; set; }
        public int MXXSCC { get; set; }
        public List<ddlModel> MXXSCC_ddlList = new List<ddlModel>();
        public int MXXSXB { get; set; }
        public List<ddlModel> MXXSXB_ddlList = new List<ddlModel>();
        public string Remark { get; set; }

        public ModifyModel()
        {
            this.SSLX_ddlList.Add(new ddlModel(-1, "未设定"));
            this.SSLX_ddlList.Add(new ddlModel(0, "普通住宿"));
            this.SSLX_ddlList.Add(new ddlModel(1, "非住宿用房"));

            this.MXXSCC_ddlList.Add(new ddlModel(-1, "未设定"));
            this.MXXSCC_ddlList.Add(new ddlModel(0, "本科生"));
            this.MXXSCC_ddlList.Add(new ddlModel(1, "硕士生"));
            this.MXXSCC_ddlList.Add(new ddlModel(2, "博士生"));

            this.MXXSXB_ddlList.Add(new ddlModel(-1, "未设定"));
            this.MXXSXB_ddlList.Add(new ddlModel(0, "男"));
            this.MXXSXB_ddlList.Add(new ddlModel(1, "女"));
        }
    }
}