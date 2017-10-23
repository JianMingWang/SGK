using FineUIMvc;
using SGK.Content;
using SGK.Models;
using SGK.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using SGK.Controllers;
using SGK.Areas.JC.Models;
using Newtonsoft.Json.Linq;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using NPOI.HSSF.Util;
using System.IO;

namespace SGK.Areas.JC.Controllers
{

    public class DormController : BaseController
    {
        private JC_Info JC_Data;

        #region Index

        // GET: JC/Dorm
        public ActionResult Index()
        {
            //BindData_Tree();
            BindData_Grid();
            BindData_DDL();
            return View();
        }

        #region 绑定树
        public void BindData_Tree()
        {
            List<TreeNode> nodes = new List<TreeNode>();
            try
            {
                var campus = from c in db.T_Campus where 1 == 1 orderby c.ID select c;
                foreach (var c in campus)
                {
                    TreeNode node = new TreeNode();
                    node.Text = c.Name;
                    node.NodeID = c.ID;
                    nodes.Add(node);
                    SubRegion(c.ID, node);
                }
                ViewBag.treeDorm = nodes.ToArray();
            }
            catch (Exception ex)
            {

            }

        }

        private void SubRegion(string campusId, TreeNode treeNode)
        {
            var region = from r in db.T_Region where r.SZXQ == campusId orderby r.ID select r;
            if (region.Any())
            {
                treeNode.Expanded = true;
                foreach (var r in region)
                {
                    TreeNode node = new TreeNode();
                    node.Text = r.Name;
                    node.NodeID = r.ID;
                    treeNode.Nodes.Add(node);
                    SubBuilding(r.ID, node);
                }
            }
        }

        private void SubBuilding(string regionId, TreeNode treeNode)
        {
            var building = from b in db.T_Building where b.SZYQ == regionId orderby b.ID select b;
            if (building.Any())
            {
                treeNode.Expanded = true;
                foreach (var b in building)
                {
                    TreeNode node = new TreeNode();
                    node.Text = b.Name;
                    node.NodeID = b.ID;
                    treeNode.Nodes.Add(node);
                }
            }
        }
        #endregion

        #region 绑定表格
        public void BindData_Grid()//初始化页面 绑定数据
        {
            var dormlist = from d in db.vw_Dorm where 1 == 1 orderby d.DormID select d;
            ViewBag.gridDorm = vw_DormToDataTable(dormlist.ToList());
        }

        public ActionResult ReBindData_Grid(SearchModel model)//Action 更新 Grid 数据
        {
            #region 查询条件
            string FJH = "";
            string SSYQ = "";
            string SSLD = "";
            if (model.FJH != null)
            {
                FJH = model.FJH;
            }
            if (model.SSYQ != null && model.SSYQ != "-1")
            {
                SSYQ = model.SSYQ;
                if (model.SSLD != null && model.SSLD != "-1")
                {
                    SSLD = model.SSLD;
                }
            }

            var dormlist = from d in db.vw_Dorm orderby d.DormID select d;

            if (FJH == "" && SSYQ == "")
            {
                //全部搜索
                dormlist = from d in db.vw_Dorm orderby d.DormID select d;
            }
            if (FJH != "" && SSYQ == "")
            {
                //搜索房间号
                dormlist = from d in db.vw_Dorm where (d.FJH == FJH) orderby d.DormID select d;
            }
            if (FJH == "" && SSYQ != "" && SSLD == "")
            {
                //搜索园区
                dormlist = from d in db.vw_Dorm where (d.RegionID == SSYQ) orderby d.DormID select d;
            }
            if (FJH == "" && SSYQ != "" && SSLD != "")
            {
                //搜索楼栋
                dormlist = from d in db.vw_Dorm where (d.BuildingID == SSLD) orderby d.DormID select d;
            }
            if (FJH != "" && SSYQ != "" && SSLD == "")
            {
                //搜索园区、房间号
                dormlist = from d in db.vw_Dorm where (d.FJH == FJH && d.RegionID == SSYQ) orderby d.DormID select d;
            }
            if (FJH != "" && SSYQ != "" && SSLD != "")
            {
                //搜索房间号、园区、楼栋
                dormlist = from d in db.vw_Dorm where (d.FJH == FJH && d.BuildingID == SSLD) orderby d.DormID select d;
            }
            #endregion

            UIHelper.Grid("gridDorm").DataSource(vw_DormToDataTable(dormlist.ToList()), model.gridField);
            //Alert.Show("搜索完毕！");

            return UIHelper.Result();
        }

        /// <summary>
        /// vw_Dorm List转换DataTable
        /// </summary>
        /// <param name="list"></param>
        /// <returns></returns>
        private DataTable vw_DormToDataTable(List<vw_Dorm> list)
        {
            DataTable dtSource = new DataTable();
            dtSource = list.ToDataTable(rec => new object[] { list });

            DataTable dt = new DataTable();
            dt = dtSource.Clone();
            foreach (DataRow row in dtSource.Rows)
            {
                DataRow r = dt.NewRow();
                r["DormID"] = row["DormID"];
                r["BuildingID"] = row["BuildingID"];
                r["SSLC"] = row["SSLC"];
                r["FJH"] = row["FJH"];
                r["SSLX"] = Exchange.NoToSSLX(row["SSLX"].ToString());
                r["ZSFY"] = row["ZSFY"];
                r["CWS"] = row["CWS"];
                r["KYCWS"] = row["KYCWS"];
                r["MXXSXB"] = Exchange.NoToSex(row["MXXSXB"].ToString());
                r["MXXSCC"] = Exchange.NoToMXXSCC(row["MXXSCC"].ToString());
                r["DeptID"] = row["DeptID"];
                r["Remark"] = row["Remark"];
                r["Bed_01"] = row["Bed_01"];
                r["Bed_02"] = row["Bed_02"];
                r["Bed_03"] = row["Bed_03"];
                r["Bed_04"] = row["Bed_04"];
                r["Bed_05"] = row["Bed_05"];
                r["Bed_06"] = row["Bed_06"];
                r["Bed_07"] = row["Bed_07"];
                r["Bed_08"] = row["Bed_08"];
                r["Bed_09"] = row["Bed_09"];
                r["Bed_10"] = row["Bed_10"];
                r["Building"] = row["Building"];
                r["RegionID"] = row["RegionID"];
                r["Region"] = row["Region"] + "-" + row["Building"];
                r["CampusID"] = row["CampusID"];
                r["Campus"] = row["Campus"];
                r["Stu_01"] = row["Stu_01"];
                r["Stu_02"] = row["Stu_02"];
                r["Stu_03"] = row["Stu_03"];
                r["Stu_04"] = row["Stu_04"];
                r["Stu_05"] = row["Stu_05"];
                r["Stu_06"] = row["Stu_06"];
                r["Stu_07"] = row["Stu_07"];
                r["Stu_08"] = row["Stu_08"];
                r["Stu_09"] = row["Stu_09"];
                r["Stu_10"] = row["Stu_10"];


                dt.Rows.Add(r);
            }

            return dt;
        }
        #endregion

        #region 下载模板
        public ActionResult DownloadEmptyDormitory()
        {
            DownloadFile("~/Document/download/Dormitory.xlsx", "空白宿舍信息表.xlsx");
            return UIHelper.Result();
        }

        private void DownloadFile(string strFilePath, string strFileName)
        {
            Response.ContentType = "application/x-zip-compressed";
            Response.AddHeader("Content-Disposition", "attachment;filename=" + strFileName);
            string filename = Server.MapPath(strFilePath);
            //指定编码 防止中文文件名乱码  
            Response.HeaderEncoding = System.Text.Encoding.GetEncoding("gb2312");
            Response.TransmitFile(filename);
        }
        #endregion

        #region 导入excel

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult fileExcel_FileSelected(HttpPostedFileBase fileExcel, FormCollection values)
        {
            if (fileExcel != null)
            {
                string fileName = fileExcel.FileName;

                if (fileName.EndsWith(".xls") || fileName.EndsWith(".xlsx"))
                {
                    fileName = fileName.Replace(":", "_").Replace(" ", "_").Replace("\\", "_").Replace("/", "_");
                    fileName = DateTime.Now.Ticks.ToString() + "_" + fileName;

                    fileExcel.SaveAs(Server.MapPath("~/Areas/JC/Import/" + fileName));
                    string strPath = Server.MapPath("~/Areas/JC/Import/") + fileName;
                    //DataTable dt = FileAction.XlSToDataTable(strPath, "", 0);
                    DataTable dt = FileAction.ExcelToDataTable(strPath, null, true);
                    if (dt.Rows.Count > 0)
                    {
                        DataTable errorDorm = new DataTable();
                        errorDorm.Columns.Add("Campus", typeof(string));
                        errorDorm.Columns.Add("Region", typeof(string));
                        errorDorm.Columns.Add("SSLD", typeof(string));
                        errorDorm.Columns.Add("SSLC", typeof(string));
                        errorDorm.Columns.Add("FJH", typeof(string));
                        errorDorm.Columns.Add("SSLX", typeof(string));
                        errorDorm.Columns.Add("ZSFY", typeof(string));
                        errorDorm.Columns.Add("CWS", typeof(string));
                        errorDorm.Columns.Add("ErrorMessage", typeof(string));

                        JC_Data = new JC_Info();
                        var campus = from c in db.T_Campus where (1 == 1) orderby c.ID select c;
                        if (campus.Any())
                        {
                            foreach (T_Campus item in campus)
                            {
                                JC_Data.Campus.Add(item.Name, item.ID);
                            }
                        }
                        var region = from c in db.T_Region where (1 == 1) orderby c.ID select c;
                        if (region.Any())
                        {
                            foreach (T_Region item in region)
                            {
                                JC_Data.Region.Add(item.Name, item.ID);
                            }
                        }
                        var building = from c in db.T_Building where (1 == 1) orderby c.ID select c;
                        if (building.Any())
                        {
                            foreach (T_Building item in building)
                            {
                                JC_Data.Building.Add(item.Name, item.ID);
                            }
                        }


                        foreach (DataRow row in dt.Rows)
                        {
                            T_Dorm dorm = null;

                            string id = "";
                            string campusid = getCampusID(row[0].ToString());
                            string regionid = getRegionID(row[1].ToString());
                            string buildingid = getBuildingID(row[2].ToString());
                            string ceil = String.Format("{0:d2}", Convert.ToInt16(row[3]));
                            string num = String.Format("{0:d4}", Convert.ToInt16(row[4]));
                            if (buildingid != "" && regionid != "" && campusid != "" && ceil != "" && num != "" && ceil == num.Substring(0, 2))
                            {
                                id = buildingid + ceil + num;
                                dorm = db.T_Dorm.Find(id);
                                if (dorm != null)
                                {
                                    //已存在
                                    DataRow errorRow = errorDorm.NewRow();
                                    errorRow["Campus"] = row[0].ToString();
                                    errorRow["Region"] = row[1].ToString();
                                    errorRow["SSLD"] = row[2].ToString();
                                    errorRow["SSLC"] = row[3].ToString();
                                    errorRow["FJH"] = row[4].ToString();
                                    errorRow["SSLX"] = row[5].ToString();
                                    errorRow["ZSFY"] = row[6].ToString();
                                    errorRow["CWS"] = row[7].ToString();
                                    errorRow["ErrorMessage"] = "宿舍信息已存在，请重新检查";
                                    errorDorm.Rows.Add(errorRow);
                                }
                                else
                                {
                                    dorm = null;
                                    dorm.ID = id;
                                    dorm.SSLD = buildingid;
                                    dorm.SSLC = Convert.ToInt16(row[3]);
                                    dorm.FJH = row[4].ToString();
                                    dorm.SSLX = Exchange.SSLXToNo(row[5].ToString());
                                    dorm.ZSFY = Convert.ToInt16(row[6].ToString());
                                    dorm.CWS = Convert.ToInt16(row[7].ToString());
                                    dorm.Remark = row[8].ToString();
                                }
                            }
                            else if (regionid != "" && campusid != "")
                            {
                                DataRow errorRow = errorDorm.NewRow();
                                errorRow["Campus"] = row[0].ToString();
                                errorRow["Region"] = row[1].ToString();
                                errorRow["SSLD"] = row[2].ToString();
                                errorRow["SSLC"] = row[3].ToString();
                                errorRow["FJH"] = row[4].ToString();
                                errorRow["SSLX"] = row[5].ToString();
                                errorRow["ZSFY"] = row[6].ToString();
                                errorRow["CWS"] = row[7].ToString();
                                errorRow["ErrorMessage"] = "宿舍信息有误，请重新检查";
                                errorDorm.Rows.Add(errorRow);
                            }
                        }

                        if (errorDorm.Rows.Count != 0)
                        {
                            string jsonString = SGK.Common.JsonConvert.DataTaleToJsonString(errorDorm);

                            JArray fields = new JArray();
                            fields.Add("Campus");
                            fields.Add("Region");
                            fields.Add("SSLD");
                            fields.Add("SSLC");
                            fields.Add("FJH");
                            fields.Add("SSLX");
                            fields.Add("ZSFY");
                            fields.Add("CWS");
                            fields.Add("ErrorMessage");
                            //存在错误项 跳转弹出错误界面
                            ViewBag.ErrorDormList = errorDorm;
                            UIHelper.Grid("gridErrorDorm").Hidden(false);
                            UIHelper.Grid("gridErrorDorm").DataSource(errorDorm, fields);
                            UIHelper.Grid("gridDorm").Hidden(true);

                            UIHelper.TextBox("hiddenText").Text(jsonString);
                        }
                        else
                        {
                            //不存在错误项，全部保存成功 刷新界面grid

                        }
                    }
                    else
                    {
                        //表格中不存在记录
                        PageContext.RegisterStartupScript("notify('表格内容为空！', 0)");
                    }
                }
                else
                {
                    //ShowNotify("文件格式错误，请选择Excel文件");
                    //使用layer框架 提示框
                    PageContext.RegisterStartupScript("notify('文件格式错误，请选择Excel文件！', 0)");
                }
            }
            return UIHelper.Result();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult btnGridErrorDormClose_Click(SearchModel model)
        {
            UIHelper.Grid("gridErrorDorm").Hidden(true);
            UIHelper.Grid("gridErrorDorm").Reset();
            UIHelper.Grid("gridDorm").Hidden(false);
            UIHelper.Grid("gridDorm").Reset();
            UIHelper.TextBox("hiddenText").Text("");
            ReBindData_Grid(model);
            return UIHelper.Result();
        }

        [HttpGet]
        //[ValidateAntiForgeryToken]
        public ActionResult btnDownLoadErrorMessage_Click(string jsonString)//页面使用的window.location.href方法为get方式
        {
            DataTable dtSource = SGK.Common.JsonConvert.JsonStringToDataTable(jsonString);
            if (dtSource.Rows.Count != 0)
            {
                //数据转换成功 jsonString字符串转换成DataTable
                return ToExcel(dtSource, "宿舍表错误信息", "错误信息导出（合计：" + dtSource.Rows.Count + "）");
            }
            else
            {
                //数据转换失败 jsonString字符串转换存在问题
                PageContext.RegisterStartupScript("notify('导出失败！', 0)");
                return UIHelper.Result();
            }
        }

        private ActionResult ToExcel(DataTable dt, string className, string title)
        {
            //文件名称   必须包含 .xls
            string fileName = className + ".xls";

            //创建工作簿、工作表
            HSSFWorkbook newExcel = new HSSFWorkbook();
            HSSFSheet sheet = (HSSFSheet)newExcel.CreateSheet("离校去向表");
            setSheet(newExcel, sheet, dt, title);

            //输出
            MemoryStream ms = new MemoryStream();
            newExcel.Write(ms);
            ms.Seek(0, SeekOrigin.Begin);
            return File(ms, "application/vnd.ms-excel", fileName);
        }

        /// <summary>
        /// 设置Excel 工作表
        /// </summary>
        /// <param name="newExcel">Excel工作簿实例</param>
        /// <param name="sheet">需进行操作的Excel工作表实例</param>
        /// <param name="dt">数据源</param>
        /// <param name="title">需要操作的Excel工作表标题</param>
        private void setSheet(HSSFWorkbook newExcel, HSSFSheet sheet, DataTable dt, string title)
        {
            #region 设置行宽，列高
            sheet.SetColumnWidth(0, 30 * 256);
            sheet.SetColumnWidth(1, 30 * 256);
            sheet.SetColumnWidth(2, 30 * 256);
            sheet.SetColumnWidth(3, 30 * 256);
            sheet.SetColumnWidth(4, 30 * 256);
            sheet.SetColumnWidth(5, 30 * 256);
            sheet.SetColumnWidth(6, 30 * 256);
            sheet.SetColumnWidth(7, 30 * 256);
            sheet.SetColumnWidth(8, 30 * 256);
            sheet.SetColumnWidth(9, 30 * 256);
            sheet.DefaultRowHeight = 15 * 20;
            #endregion

            #region 设置字体
            HSSFFont font_title = (HSSFFont)newExcel.CreateFont();
            font_title.FontHeightInPoints = 14;

            HSSFFont font_name = (HSSFFont)newExcel.CreateFont();
            font_name.FontHeightInPoints = 9;
            font_name.IsBold = true;

            HSSFFont font_data = (HSSFFont)newExcel.CreateFont();
            font_data.FontHeightInPoints = 9;
            #endregion

            #region 设置样式
            //1、标题的样式
            HSSFCellStyle style_title = (HSSFCellStyle)newExcel.CreateCellStyle();
            style_title.Alignment = HorizontalAlignment.Center;
            style_title.VerticalAlignment = VerticalAlignment.Center;
            style_title.SetFont(font_title);

            //2、字段名的样式
            HSSFCellStyle style_name = (HSSFCellStyle)newExcel.CreateCellStyle();
            style_name.Alignment = HorizontalAlignment.Center;
            style_name.VerticalAlignment = VerticalAlignment.Center;
            style_name.SetFont(font_name);
            style_name.BorderTop = BorderStyle.Thin;
            style_name.BorderBottom = BorderStyle.Thin;
            style_name.BorderLeft = BorderStyle.Thin;
            style_name.BorderRight = BorderStyle.Thin;

            //3、批次的样式 加粗样式
            HSSFCellStyle style_batch = (HSSFCellStyle)newExcel.CreateCellStyle();
            style_batch.Alignment = HorizontalAlignment.Center;
            style_batch.VerticalAlignment = VerticalAlignment.Center;
            style_batch.FillPattern = FillPattern.SolidForeground;
            style_batch.FillForegroundColor = HSSFColor.Grey40Percent.Index;
            style_batch.SetFont(font_data);
            style_batch.BorderTop = BorderStyle.Thin;
            style_batch.BorderBottom = BorderStyle.Thin;
            style_batch.BorderLeft = BorderStyle.Thin;
            style_batch.BorderRight = BorderStyle.Thin;

            //4、数据的样式
            HSSFCellStyle style_data = (HSSFCellStyle)newExcel.CreateCellStyle();
            style_data.Alignment = HorizontalAlignment.Center;
            style_data.VerticalAlignment = VerticalAlignment.Center;
            style_data.SetFont(font_data);
            style_data.BorderTop = BorderStyle.Thin;
            style_data.BorderBottom = BorderStyle.Thin;
            style_data.BorderLeft = BorderStyle.Thin;
            style_data.BorderRight = BorderStyle.Thin;
            #endregion

            #region 设置内容
            //第一行 标题
            HSSFRow row_title = (HSSFRow)sheet.CreateRow(0);
            HSSFCell cell_title = (HSSFCell)row_title.CreateCell(0);
            cell_title.SetCellValue(title);
            cell_title.CellStyle = style_title;
            sheet.AddMergedRegion(new CellRangeAddress(0, 0, 0, 9));   //合并单元格(起始行，结束行，起始列，结束列)

            //第二行 字段名 
            HSSFRow row_name = (HSSFRow)sheet.CreateRow(1);

            HSSFCell cell_name_1 = (HSSFCell)row_name.CreateCell(0);
            cell_name_1.SetCellValue("序号");
            cell_name_1.CellStyle = style_name;

            HSSFCell cell_name_2 = (HSSFCell)row_name.CreateCell(1);
            cell_name_2.SetCellValue("校区");
            cell_name_2.CellStyle = style_name;

            HSSFCell cell_name_3 = (HSSFCell)row_name.CreateCell(2);
            cell_name_3.SetCellValue("园区");
            cell_name_3.CellStyle = style_name;

            HSSFCell cell_name_4 = (HSSFCell)row_name.CreateCell(3);
            cell_name_4.SetCellValue("楼栋");
            cell_name_4.CellStyle = style_name;

            HSSFCell cell_name_5 = (HSSFCell)row_name.CreateCell(4);
            cell_name_5.SetCellValue("楼层");
            cell_name_5.CellStyle = style_name;

            HSSFCell cell_name_6 = (HSSFCell)row_name.CreateCell(5);
            cell_name_6.SetCellValue("房间号");
            cell_name_6.CellStyle = style_name;

            HSSFCell cell_name_7 = (HSSFCell)row_name.CreateCell(6);
            cell_name_7.SetCellValue("宿舍类型");
            cell_name_7.CellStyle = style_name;

            HSSFCell cell_name_8 = (HSSFCell)row_name.CreateCell(7);
            cell_name_8.SetCellValue("住宿费用");
            cell_name_8.CellStyle = style_name;

            HSSFCell cell_name_9 = (HSSFCell)row_name.CreateCell(8);
            cell_name_9.SetCellValue("总床位");
            cell_name_9.CellStyle = style_name;

            HSSFCell cell_name_10 = (HSSFCell)row_name.CreateCell(9);
            cell_name_10.SetCellValue("错误信息");
            cell_name_10.CellStyle = style_name;

            //数据
            int n = 2;//起始行号
            int i = 1;//起始序号
            foreach (DataRow _row in dt.Rows)
            {
                HSSFRow row = (HSSFRow)sheet.CreateRow(n++);//写入行  
                row.CreateCell(0).SetCellValue(i++);
                row.CreateCell(1).SetCellValue(_row[0].ToString());
                row.CreateCell(2).SetCellValue(_row[1].ToString());
                row.CreateCell(3).SetCellValue(_row[2].ToString());
                row.CreateCell(4).SetCellValue(_row[3].ToString());
                row.CreateCell(5).SetCellValue(_row[4].ToString());
                row.CreateCell(6).SetCellValue(_row[5].ToString());
                row.CreateCell(7).SetCellValue(_row[6].ToString());
                row.CreateCell(8).SetCellValue(_row[7].ToString());
                row.CreateCell(9).SetCellValue(_row[8].ToString());
                foreach (ICell cell in row)
                {
                    if (cell.ColumnIndex == 0)
                    {
                        cell.CellStyle = style_batch;
                    }
                    else
                    {
                        cell.CellStyle = style_data;
                    }
                }
            }
            #endregion
        }

        private string getBuildingID(string name)
        {
            string id = "";
            if (JC_Data.Building.ContainsKey(name))
            {
                id = JC_Data.Building[name];
            }
            return id;
        }
        private string getRegionID(string name)
        {
            string id = "";
            if (JC_Data.Region.ContainsKey(name))
            {
                id = JC_Data.Region[name];
            }
            return id;
        }
        private string getCampusID(string name)
        {
            string id = "";
            if (JC_Data.Campus.ContainsKey(name))
            {
                id = JC_Data.Campus[name];
            }
            return id;
        }

        private int countDorm(string id)
        {
            var dorm = from d in db.T_Dorm where d.SSLD == id select d;
            return dorm.Count();
        }
        private int countBuilding(string id)
        {
            var building = from b in db.T_Building where b.SZYQ == id select b;
            return building.Count();
        }
        private int countRegion(string id)
        {
            var region = from r in db.T_Region where r.SZXQ == id select r;
            return region.Count();
        }
        #endregion

        #region 绑定下搜索拉框

        private void BindData_DDL()
        {
            List<ddlModel> ddlSSYQ_data = new List<ddlModel>();
            ddlSSYQ_data.Add(new ddlModel("-1", "全部"));

            var regionList = from T_Region in db.T_Region where (1 == 1) select T_Region;
            if (regionList.Any())
            {
                foreach (T_Region region in regionList)
                {
                    ddlSSYQ_data.Add(new ddlModel(region.ID, region.Name));
                }
            }
            ViewBag.ddlDataSource = ddlSSYQ_data;
        }

        [HttpPost]
        public ActionResult ddlSSYQ_SelectedIndexChanged(string ddlSSYQ, string ddlSSYQ_text)
        {
            if (ddlSSYQ == "-1")//选择全部园区
            {
                UIHelper.DropDownList("ddlSSLD").Enabled(false);
            }
            List<ddlModel> data = new List<ddlModel>();
            data.Add(new ddlModel("-1", "全部"));

            var buildingList = from T_Building in db.T_Building where (T_Building.SZYQ == ddlSSYQ) select T_Building;

            if (buildingList.Any())
            {
                foreach (T_Building building in buildingList)
                {
                    data.Add(new ddlModel(building.ID, building.Name));
                }

                UIHelper.DropDownList("ddlSSLD").DataSource(data, "value", "text");
                UIHelper.DropDownList("ddlSSLD").Enabled(true);
            }
            else
            {
                UIHelper.DropDownList("ddlSSLD").Enabled(false);
            }

            return UIHelper.Result();
        }

        #endregion

        #region 搜索

        [HttpPost]
        public ActionResult btnSearchClick(SearchModel model)
        {
            if (model != null)
            {
                //界面 Layer弹出框 执行view中的js
                PageContext.RegisterStartupScript("notify('搜索完成！', 1)");
                return ReBindData_Grid(model);
            }
            else
            {
                Alert.Show("出现错误！错误Action:btnSearchClick");
            }

            return UIHelper.Result();
        }

        public ActionResult btnReset(SearchModel model)
        {
            if (model != null)
            {
                return ReBindData_Grid(model);
            }
            else
            {
                Alert.Show("出现错误！错误Action:btnReset");
            }
            return UIHelper.Result();
        }

        #endregion

        #endregion

        #region Modify
        public ActionResult Modify()
        {
            string DormID = Request.QueryString["id"].ToString();
            return View("Modify", GetModifyData(DormID));
        }

        public ActionResult MultiModify()
        {
            string DormList = Request.QueryString["DormList"].ToString();
            return View("MultiModify", GetMultiModifyData(DormList));
        }

        private ModifyModel GetModifyData(string DormID)
        {
            ModifyModel model = new ModifyModel();

            vw_Dorm dorm = (from vw_Dorm in db.vw_Dorm where (vw_Dorm.DormID == DormID) select vw_Dorm).ToList().First();

            model.ID = dorm.DormID;
            model.Campus = dorm.Campus;
            model.Region = dorm.Region;
            model.SSLD = dorm.Building;
            model.FJH = dorm.FJH;
            model.CWS = dorm.CWS.ToString();
            model.SSLX = ((dorm.SSLX == null) || (dorm.SSLX == "")) ? "-1" : dorm.SSLX;
            model.ZSFY = (dorm.ZSFY == null) ? "0" : dorm.ZSFY.ToString();
            model.MXXSCC = ((dorm.MXXSCC == null) || (dorm.MXXSCC == "")) ? "-1" : dorm.MXXSCC;
            model.MXXSXB = ((dorm.MXXSXB == null) || (dorm.MXXSXB == "")) ? "-1" : dorm.MXXSXB;
            model.Remark = dorm.Remark;

            return model;
        }

        private MultiModifyModel GetMultiModifyData(string dormList)
        {
            MultiModifyModel data = new MultiModifyModel();
            data.DormList = dormList;
            return data;
        }

        [HttpPost]
        public ActionResult Modify_btnSaveClose_Click(FormCollection form)
        {
            string ID = form["DormID"].ToString();
            string CWS = form["CWS"].ToString();
            string SSLX = (form["SSLX"].ToString() == "-1") ? null : form["SSLX"].ToString();
            string ZSFY = form["ZSFY"].ToString();
            string MXXSCC = (form["MXXSCC"].ToString() == "-1") ? null : form["MXXSCC"].ToString();
            string MXXSXB = (form["MXXSXB"].ToString() == "-1") ? null : form["MXXSXB"].ToString();
            string Remark = form["Remark"].ToString();

            T_Dorm dorm = db.T_Dorm.Find(ID);
            dorm.CWS = Convert.ToInt32(CWS);
            dorm.SSLX = SSLX;
            dorm.ZSFY = Convert.ToInt32(ZSFY);
            dorm.MXXSCC = MXXSCC;
            dorm.MXXSXB = MXXSXB;
            dorm.Remark = Remark;
            try
            {
                db.SaveChanges();
                PageContext.RegisterStartupScript(ActiveWindow.GetHideExecuteScriptReference("ModifySuccess();"));
            }
            catch
            {
                PageContext.RegisterStartupScript("notify('修改保存失败！','0')");
            }

            return UIHelper.Result();
        }

        [HttpPost]
        public ActionResult MultiModify_btnSaveClose_Click(FormCollection form)
        {
            string DormList = form["DormList"].ToString();
            string[] dormList = DormList.Split('_');

            string SSLX = form["SSLX"].ToString();
            string ZSFY = form["ZSFY"].ToString();
            string MXXSCC = (form["MXXSCC"].ToString() == "-1") ? "" : form["MXXSCC"].ToString();
            string MXXSXB = (form["MXXSXB"].ToString() == "-1") ? "" : form["MXXSXB"].ToString();

            foreach (string item in dormList)
            {
                T_Dorm dorm = db.T_Dorm.Find(item);
                if (dorm != null)
                {
                    if (form["cbxSSLX"].ToString() == "true")
                    {
                        dorm.SSLX = SSLX;
                    }
                    if (form["cbxZSFY"].ToString() == "true")
                    {
                        dorm.ZSFY = Convert.ToInt32(ZSFY);
                    }
                    if (form["cbxMXXSCC"].ToString() == "true")
                    {
                        dorm.MXXSCC = MXXSCC;
                    }
                    if (form["cbxMXXSXB"].ToString() == "true")
                    {
                        dorm.MXXSXB = MXXSXB;
                    }
                }
            }
            try
            {
                db.SaveChanges();
                PageContext.RegisterStartupScript(ActiveWindow.GetHideExecuteScriptReference("ModifySuccess();"));
            }
            catch
            {
                PageContext.RegisterStartupScript("notify('批量修改保存失败！','0')");
            }
            return UIHelper.Result();
        }

        public ActionResult btnMultiModify_Click(JArray selectRowsID)
        {
            return UIHelper.Result();
        }


        #endregion

        #region Add

        public ActionResult Add()
        {
            GetAddData();
            return View("Add", GetAddData());
        }

        private AddModel GetAddData()
        {
            AddModel model = new AddModel();

            var campusList = from T_Campus in db.T_Campus where (1 == 1) orderby T_Campus.ID select T_Campus;
            if (campusList.Any())
            {
                foreach (T_Campus campus in campusList)
                {
                    model.Campus_ddlList.Add(new ddlModel(campus.ID.ToString(), campus.Name.ToString()));
                }
            }

            return model;
        }

        public ActionResult ddlSSXQ_Add_SelectedIndexChanged(string SSXQ, string SSXQ_text)
        {
            UIHelper.DropDownList("SSYQ").Reset();
            UIHelper.DropDownList("SSYQ").Enabled(false);
            UIHelper.DropDownList("SSLD").Reset();
            UIHelper.DropDownList("SSLD").Enabled(false);

            List<ddlModel> ddlData = new List<ddlModel>();
            var RegionList = from T_Region in db.T_Region where (T_Region.SZXQ == SSXQ) orderby T_Region.ID select T_Region;
            if (RegionList.Any())
            {
                foreach (T_Region region in RegionList)
                {
                    ddlData.Add(new ddlModel(region.ID, region.Name));
                }
                UIHelper.DropDownList("SSYQ").DataSource(ddlData, "value", "text");
                UIHelper.DropDownList("SSYQ").Enabled(true);
            }
            else
            {
                PageContext.RegisterStartupScript("notify('获取园区信息失败！','0')");
            }

            return UIHelper.Result();
        }

        public ActionResult ddlSSYQ_Add_SelectedIndexChanged(string SSYQ, string SSYQ_text)
        {
            UIHelper.DropDownList("SSLD").Reset();
            UIHelper.DropDownList("SSLD").Enabled(false);

            List<ddlModel> ddlData = new List<ddlModel>();
            var BuildingLIst = from T_Building in db.T_Building where (T_Building.SZYQ == SSYQ) orderby T_Building.ID select T_Building;
            if (BuildingLIst.Any())
            {
                foreach (T_Building Building in BuildingLIst)
                {
                    ddlData.Add(new ddlModel(Building.ID, Building.Name));
                }
                UIHelper.DropDownList("SSLD").DataSource(ddlData, "value", "text");
                UIHelper.DropDownList("SSLD").Enabled(true);
            }
            else
            {
                PageContext.RegisterStartupScript("notify('获取楼栋信息失败！','0')");
            }

            return UIHelper.Result();
        }

        public ActionResult Add_btnSaveClose_Click(FormCollection form)
        {
            string SSLD = form["SSLD"].ToString();
            string SSLC = (Convert.ToInt32(form["SSLC"])).ToString("00");
            string FJH = (Convert.ToInt32(form["FJH"])).ToString("0000");
            string SSLX = form["SSLX"].ToString();
            string SSFY = form["SSFY"].ToString();
            string CWS = form["CWS"].ToString();
            string MXXSXB = form["MXXSXB"].ToString();
            string MXXSCC = form["MXXSCC"].ToString();
            string Remark = form["Remark"].ToString();

            if (FJH.Substring(0, 2) == SSLC)
            {
                string ID = SSLD + SSLC + FJH;
                T_Dorm dorm = db.T_Dorm.Find(ID);
                if (dorm == null)
                {
                    dorm = new T_Dorm();
                    dorm.ID = ID;
                    dorm.SSLD = SSLD;
                    dorm.SSLC = Convert.ToInt32(SSLC);
                    dorm.FJH = form["FJH"].ToString();
                    dorm.SSLX = SSLX;
                    dorm.ZSFY = Convert.ToInt32(SSFY);
                    dorm.CWS = Convert.ToInt32(CWS);
                    dorm.KYCWS = Convert.ToInt32(CWS);
                    dorm.MXXSXB = MXXSXB == "-1" ? null : MXXSXB;
                    dorm.MXXSCC = MXXSCC == "-1" ? null : MXXSCC;
                    dorm.Remark = Remark == "" ? null : Remark;

                    db.T_Dorm.Add(dorm);
                    db.SaveChanges();
                    PageContext.RegisterStartupScript(ActiveWindow.GetHideExecuteScriptReference("AddSuccess();"));
                }
                else
                {
                    PageContext.RegisterStartupScript("notify('保存失败，宿舍信息已存在！','0')");
                }
            }
            else
            {
                PageContext.RegisterStartupScript("notify('保存失败，寝室号与楼层信息不符，请核对后重新填写！','0')");
            }
            return UIHelper.Result();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult btnDelete_Click(JArray selectedRowsID)
        {
            foreach (var item in selectedRowsID)
            {
                T_Dorm dorm = db.T_Dorm.Find(item.ToString());
                db.T_Dorm.Remove(dorm);
            }
            try
            {
                //db.SaveChanges();
                PageContext.RegisterStartupScript("DeleteSuccess();");
            }
            catch
            {
                PageContext.RegisterStartupScript("notify('删除失败！','0')");
            }
            return UIHelper.Result();
        }
        #endregion

        public ActionResult GridRefreshPostBack(string gridName, JArray gridFields, JObject typeParams)
        {
            var grid = UIHelper.Grid(gridName);


            grid.DataSource("", gridFields);
            return UIHelper.Result();
        }
    }
}