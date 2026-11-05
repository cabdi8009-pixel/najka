const translations={
 en:{
  loginSubtitle:"Hospital Management System",username:"Username",password:"Password",login:"Login",logout:"Logout",
  subtitle:"Hospital Management System",dashboard:"Dashboard",patients:"Patients",doctors:"Doctors",
  appointments:"Appointments",staff:"Staff",pharmacy:"Pharmacy",laboratory:"Laboratory",
  admissions:"Admissions",billing:"Billing",departments:"Departments",inventory:"Inventory",
  nurses:"Nurses",services:"Medical Services",reports:"Reports",
  totalPatients:"Total Patients",totalDoctors:"Total Doctors",totalAppointments:"Appointments",
  totalStaff:"Staff Members",recent:"Recent Patients",add:"Add New",search:"Search records...",
  print:"Print",save:"Save Record",cancel:"Cancel",edit:"Edit",delete:"Delete",
  noRecords:"No records found. Add a new record.",name:"Full Name",phone:"Phone Number",
  age:"Age",gender:"Gender",male:"Male",female:"Female",birth:"Date of Birth",
  address:"Address",blood:"Blood Group",emergency:"Emergency Contact",allergies:"Allergies",
  history:"Medical History",diagnosis:"Diagnosis",treatment:"Treatment",doctor:"Doctor",
  date:"Registration Date",email:"Email",specialty:"Specialization",department:"Department",
  patient:"Patient Name",time:"Time",status:"Status",amount:"Amount ($)",
  medicine:"Medicine Name",quantity:"Quantity",expiry:"Expiry Date",ward:"Ward",
  bed:"Bed Number",description:"Description",position:"Position",shift:"Shift",
  result:"Result",test:"Test Name",service:"Service Name",item:"Item Name",
  supplier:"Supplier",paid:"Paid",unpaid:"Unpaid",pending:"Pending",completed:"Completed",
  confirmed:"Confirmed",admitted:"Admitted",discharged:"Discharged",summary:"Records Summary",
  totalRecords:"Total Records",required:"Please fill in the required fields.",
  saved:"Record saved successfully.",updated:"Record updated successfully.",
  deleted:"Record deleted.",confirmDelete:"Are you sure you want to delete this record?",
  welcome:"Welcome to Balguri Hospital.",select:"Select",register:"Register Patient",
  historyTitle:"Patient Medical History",view:"View"
 },
 so:{
  loginSubtitle:"Nidaamka Maamulka Isbitaalka",username:"Magaca isticmaalaha",password:"Furaha sirta ah",
  login:"Gal nidaamka",logout:"Ka bax",subtitle:"Nidaamka Maamulka Isbitaalka",
  dashboard:"Bogga Guud",patients:"Bukaannada",doctors:"Dhakhaatiirta",
  appointments:"Ballamaha",staff:"Shaqaalaha",pharmacy:"Farmashiyaha",
  laboratory:"Shaybaarka",admissions:"Jiifka Bukaanka",billing:"Lacag-bixinta",
  departments:"Qaybaha",inventory:"Alaabaha",nurses:"Kalkaaliyeyaasha",
  services:"Adeegyada Caafimaadka",reports:"Warbixinnada",
  totalPatients:"Tirada Bukaannada",totalDoctors:"Tirada Dhakhaatiirta",
  totalAppointments:"Ballamaha",totalStaff:"Shaqaalaha",recent:"Bukaannadii u dambeeyey",
  add:"Ku dar xog cusub",search:"Raadi xogta...",print:"Daabac",save:"Kaydi xogta",
  cancel:"Jooji",edit:"Wax ka beddel",delete:"Tirtir",
  noRecords:"Xog lama helin. Ku dar xog cusub.",name:"Magaca oo buuxa",
  phone:"Lambarka telefoonka",age:"Da'da",gender:"Jinsiga",male:"Lab",female:"Dhedig",
  birth:"Taariikhda dhalashada",address:"Cinwaanka",blood:"Nooca dhiigga",
  emergency:"Qofka lala xiriirayo xaalad degdeg ah",allergies:"Xasaasiyadda",
  history:"Taariikhda caafimaadka",diagnosis:"Cudurka laga helay",
  treatment:"Daaweynta",doctor:"Dhakhtarka",date:"Taariikhda diiwaangelinta",
  email:"Iimaylka",specialty:"Takhasuska",department:"Qaybta",
  patient:"Magaca bukaanka",time:"Waqtiga",status:"Xaaladda",
  amount:"Lacagta ($)",medicine:"Magaca daawada",quantity:"Tirada",
  expiry:"Taariikhda dhicitaanka",ward:"Qolka jiifka",bed:"Lambarka sariirta",
  description:"Faahfaahin",position:"Shaqada",shift:"Xilliga shaqada",
  result:"Natiijada",test:"Nooca baaritaanka",service:"Magaca adeegga",
  item:"Magaca alaabta",supplier:"Alaab-qeybiyaha",paid:"La bixiyey",
  unpaid:"Lama bixin",pending:"Sugaya",completed:"Dhammaaday",
  confirmed:"La xaqiijiyey",admitted:"Jiif ku jira",discharged:"Laga saaray",
  summary:"Soo koobidda xogta",totalRecords:"Wadarta xogta",
  required:"Fadlan buuxi meelaha loo baahan yahay.",
  saved:"Xogta si guul leh ayaa loo kaydiyey.",
  updated:"Xogta waa la beddelay.",deleted:"Xogta waa la tirtiray.",
  confirmDelete:"Ma hubtaa inaad tirtirayso xogtan?",
  welcome:"Ku soo dhowow Balguri Hospital.",select:"Dooro",
  register:"Diiwaangeli bukaan",historyTitle:"Taariikhda caafimaadka bukaanka",
  view:"Arag"
 }
};
let lang="en";
const t=k=>translations[lang][k]||k;
const defs={
 patients:{title:"patients",fields:[
 ["name","name","text",true],["phone","phone","tel"],["age","age","number"],
 ["gender","gender","select","male,female"],["birth","birth","date"],
 ["address","address","text"],["blood","blood","select","A+,A-,B+,B-,AB+,AB-,O+,O-"],
 ["emergency","emergency","text"],["allergies","allergies","text"],
 ["history","history","textarea"],["diagnosis","diagnosis","textarea"],
 ["treatment","treatment","textarea"],["doctor","doctor","text"],["date","date","date"]
 ]},
 doctors:{title:"doctors",fields:[
 ["name","name","text",true],["specialty","specialty","text"],
 ["phone","phone","tel"],["email","email","email"],["department","department","text"]
 ]},
 appointments:{title:"appointments",fields:[
 ["patient","patient","text",true],["doctor","doctor","text"],
 ["date","date","date"],["time","time","time"],
 ["status","status","select","pending,confirmed,completed,cancelled"]
 ]},
 staff:{title:"staff",fields:[
 ["name","name","text",true],["position","position","text"],
 ["phone","phone","tel"],["department","department","text"]
 ]},
 pharmacy:{title:"pharmacy",fields:[
 ["medicine","medicine","text",true],["quantity","quantity","number"],
 ["amount","amount","number"],["expiry","expiry","date"]
 ]},
 laboratory:{title:"laboratory",fields:[
 ["patient","patient","text",true],["test","test","text"],
 ["date","date","date"],["result","result","textarea"],
 ["status","status","select","pending,completed"]
 ]},
 admissions:{title:"admissions",fields:[
 ["patient","patient","text",true],["ward","ward","text"],["bed","bed","text"],
 ["date","date","date"],["status","status","select","admitted,discharged"]
 ]},
 billing:{title:"billing",fields:[
 ["patient","patient","text",true],["description","description","text"],
 ["amount","amount","number"],["date","date","date"],
 ["status","status","select","paid,unpaid,partial"]
 ]},
 departments:{title:"departments",fields:[
 ["name","name","text",true],["doctor","doctor","text"],["description","description","textarea"]
 ]},
 inventory:{title:"inventory",fields:[
 ["item","item","text",true],["quantity","quantity","number"],
 ["supplier","supplier","text"],["date","date","date"]
 ]},
 nurses:{title:"nurses",fields:[
 ["name","name","text",true],["phone","phone","tel"],
 ["shift","shift","select","morning,evening,night"],["department","department","text"]
 ]},
 services:{title:"services",fields:[
 ["service","service","text",true],["amount","amount","number"],["description","description","textarea"]
 ]}
};
let db={},current="dashboard",editing=null;
Object.keys(defs).forEach(k=>{
 try{db[k]=JSON.parse(localStorage.getItem("bh_"+k))||[]}
 catch(e){db[k]=[]}
});
function save(k){localStorage.setItem("bh_"+k,JSON.stringify(db[k]))}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function notify(msg){
 const n=document.getElementById("notice");n.textContent=msg;n.style.display="block";
 setTimeout(()=>n.style.display="none",2600);
}
function toggleLang(){
 lang=lang==="en"?"so":"en";
 document.documentElement.lang=lang;
 document.getElementById("loginLang").textContent=lang==="en"?"Af-Soomaali":"English";
 document.getElementById("appLang").textContent=lang==="en"?"Af-Soomaali":"English";
 document.querySelectorAll("[data-i]").forEach(el=>el.textContent=t(el.dataset.i));
 if(!document.getElementById("application").classList.contains("hidden"))render();
}
document.getElementById("loginForm").onsubmit=e=>{
 e.preventDefault();
 if(document.getElementById("username").value==="admin" &&
 document.getElementById("password").value==="admin123"){
  sessionStorage.setItem("bh_demo_login","yes");
  document.getElementById("login").classList.add("hidden");
  document.getElementById("application").classList.remove("hidden");
  render();
 }else document.getElementById("loginError").textContent=
 lang==="so"?"Magaca ama furaha sirta ah waa khalad.":"Incorrect username or password.";
};
function logout(){
 sessionStorage.removeItem("bh_demo_login");
 document.getElementById("application").classList.add("hidden");
 document.getElementById("login").classList.remove("hidden");
 document.getElementById("password").value="";
}
function menu(){
 const m=document.getElementById("menu");
 const items=["dashboard",...Object.keys(defs),"reports"];
 m.innerHTML=items.map(k=>`<button class="${current===k?"active":""}" onclick="go('${k}')">${current===k?"● ":""}${t(k)}</button>`).join("");
}
function go(k){current=k;editing=null;render()}
function dashboard(){
 return `<h1>${t("dashboard")}</h1><p class="muted">${t("welcome")}</p>
 <div class="cards">
 ${["patients","doctors","appointments","staff","pharmacy","admissions"].map(k=>`
 <div class="card">${t(k)}<b>${db[k].length}</b></div>`).join("")}
 </div>
 <div class="panel"><h3>${t("recent")}</h3>${table("patients",true)}</div>`;
}
function table(k,recent=false,rows=null){
 const records=rows|| (recent?db[k].slice(-5).reverse():db[k]);
 if(!records.length)return `<p class="muted">${t("noRecords")}</p>`;
 const fields=defs[k].fields;
 return `<div class="tablewrap"><table><thead><tr>
 ${fields.map(f=>`<th>${t(f[1])}</th>`).join("")}
 <th>${t("view")} / ${t("edit")}</th><th>${t("delete")}</th>
 </tr></thead><tbody>${records.map(r=>`<tr>
 ${fields.map(f=>`<td>${esc(r[f[0]])}</td>`).join("")}
 <td><div class="actions">
 <button class="light" onclick="editRecord('${k}','${r.id}')">${t("edit")}</button>
 ${k==="patients"?`<button class="light" onclick="patientHistory('${r.id}')">${t("view")}</button>`:""}
 </div></td>
 <td><button class="red" onclick="removeRecord('${k}','${r.id}')">${t("delete")}</button></td>
 </tr>`).join("")}</tbody></table></div>`;
}
function modulePage(k){
 return `<h1>${t(k)}</h1><p class="muted">${t("subtitle")}</p>
 <div class="toolbar">
 <input id="search" placeholder="${t("search")}" oninput="searchRecords('${k}')">
 <button class="green" onclick="form('${k}')">＋ ${t("add")}</button>
 <button class="primary" onclick="window.print()">${t("print")}</button>
 </div>
 <div id="formArea" class="panel hidden"></div>
 <div id="tableArea" class="panel">${table(k)}</div>`;
}
function form(k,id=null){
 const old=id?db[k].find(x=>x.id===id):{};
 editing=id;
 const area=document.getElementById("formArea");
 area.classList.remove("hidden");
 area.innerHTML=`<h3>${id?t("edit"):t("add")} – ${t(k)}</h3>
 <form id="dataForm"><div class="formgrid">
 ${defs[k].fields.map(f=>{
 let v=old?.[f[0]]??(f[2]==="date"?new Date().toISOString().slice(0,10):"");
 let control=f[2]==="select"
 ?`<select name="${f[0]}"><option value="">${t("select")}</option>${f[3].split(",").map(x=>`<option value="${x}" ${v===x?"selected":""}>${x==="male"?t("male"):x==="female"?t("female"):x}</option>`).join("")}</select>`
 :f[2]==="textarea"?`<textarea name="${f[0]}">${esc(v)}</textarea>`
 :`<input name="${f[0]}" type="${f[2]}" value="${esc(v)}" ${f[3]?"required":""} ${f[2]==="number"?'min="0"':""}>`;
 return `<div class="field"><label>${t(f[1])}${f[3]?" *":""}</label>${control}</div>`;
 }).join("")}
 </div><br><button class="green" type="submit">${t("save")}</button>
 <button class="primary" type="button" onclick="closeForm()">${t("cancel")}</button></form>`;
 document.getElementById("dataForm").onsubmit=e=>{
  e.preventDefault();const obj=Object.fromEntries(new FormData(e.target).entries());
  if(id){
   const i=db[k].findIndex(x=>x.id===id);db[k][i]={...db[k][i],...obj};
   notify(t("updated"));
  }else{
   obj.id=Date.now().toString();db[k].push(obj);notify(t("saved"));
  }
  save(k);editing=null;render();
 };
 area.scrollIntoView({behavior:"smooth"});
}
function closeForm(){
 const a=document.getElementById("formArea");if(a)a.classList.add("hidden");
 editing=null;
}
function editRecord(k,id){form(k,id)}
function removeRecord(k,id){
 if(!confirm(t("confirmDelete")))return;
 db[k]=db[k].filter(x=>x.id!==id);save(k);render();notify(t("deleted"));
}
function searchRecords(k){
 const q=document.getElementById("search").value.toLowerCase();
 const rows=db[k].filter(r=>Object.values(r).some(v=>String(v).toLowerCase().includes(q)));
 document.getElementById("tableArea").innerHTML=table(k,false,rows);
}
function patientHistory(id){
 const p=db.patients.find(x=>x.id===id);if(!p)return;
 const fields=defs.patients.fields;
 document.getElementById("content").innerHTML=`
 <h1>${t("historyTitle")}</h1>
 <div class="panel"><h2>${esc(p.name)}</h2>
 <p><b>Patient ID:</b> ${esc(p.id)}</p>
 ${fields.map(f=>`<p><b>${t(f[1])}:</b> ${esc(p[f[0]])||"—"}</p>`).join("")}
 <button class="primary" onclick="window.print()">${t("print")}</button>
 <button class="light" onclick="go('patients')">${t("cancel")}</button></div>`;
}
function reports(){
 const total=Object.values(db).reduce((a,x)=>a+x.length,0);
 return `<h1>${t("reports")}</h1><div class="panel">
 <h3>${t("summary")}</h3>
 ${Object.keys(defs).map(k=>`<p>${t(k)}: <b>${db[k].length}</b></p>`).join("")}
 <hr><h3>${t("totalRecords")}: ${total}</h3>
 <button class="primary" onclick="window.print()">${t("print")}</button>
 <button class="green" onclick="backup()">Download Backup</button>
 </div>`;
}
function backup(){
 const blob=new Blob([JSON.stringify(db,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);const a=document.createElement("a");
 a.href=url;a.download="balguri-hospital-backup.json";a.click();
 URL.revokeObjectURL(url);
}
function render(){
 menu();
 const c=document.getElementById("content");
 c.innerHTML=current==="dashboard"?dashboard():current==="reports"?reports():modulePage(current);
}
if(sessionStorage.getItem("bh_demo_login")==="yes"){
 document.getElementById("login").classList.add("hidden");
 document.getElementById("application").classList.remove("hidden");
 render();
}
