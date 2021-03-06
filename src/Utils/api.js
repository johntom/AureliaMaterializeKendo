
  import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
// @inject(HttpClient)
export var   api = {


    getImages() {
       
     var url = `http://www.gtz.com:9010/api/images?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
   
      return fetch(url).then((res) => res.json())
  },
   getlistTags(type) {
        // this is workflow no need to jwt
        // tag = newsfree or news 
        var url = `http://cm.brookbridgeinc.com:8005/api/getlisttag/${type}`;

        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },
    getlistPosts(type) {
        var url = `http://cm.brookbridgeinc.com:8005/api/getlistposts/${type}`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },
    getUsers() {
        var url = 'http://cm.brookbridgeinc.com:8005/api/users';
        // s?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc';

        return fetch(url, { mode: 'cors' }).then((res) => res.json())

    },
    getUsersall(type) {
        // var url = 'http://cm.brookbridgeinc.com:8004/api/users?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc';
        var url = 'http://cm.brookbridgeinc.com:8005/api/users';

        return fetch(url, { mode: 'cors' }).then((res) => res.json())

    },

    getWelcome() {
        var url = `http://cm.brookbridgeinc.com:8005/api/posts`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())

    },
    getbcsStatus(bcsnumber) {
        // this is workflow no need to jwt ie 151024
        var url = `http://cm.brookbridgeinc.com/api/contract/${bcsnumber}`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getbcsStatus2(bcsnumber) {

        var url = `http://cm.brookbridgeinc.com:8004/api/projstatusbcs/${bcsnumber}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;

        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },




    getBuildings(userid) {
        var url = `http://cm.brookbridgeinc.com:8004/api/buildings/${userid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())

    },

    getCharts(buildingid) {
        var url = `http://cm.brookbridgeinc.com:8004/api/propertycharts/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getChartsDrill(buildingid) {
        var url = `http://cm.brookbridgeinc.com:8004/api/propertycharts2/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getStatus(buildingid) {
        var url = `http://cm.brookbridgeinc.com:8004/api/projstatusreport/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },


 getStatusTeneant(userid) {
        var url = `http://cm.brookbridgeinc.com:8004/api/projstatusreporttenant/${userid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },




    getStatusgroup(buildingid) {
        var url = `http://cm.brookbridgeinc.com:8004/api/projstatusgroup/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getFillings(proj) {
        var url = `http://cm.brookbridgeinc.com:8004/api/filingdetails/${proj}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
     // console.log('  getFillings url', url);
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getprojDocs(proj) {
        var url = `http://cm.brookbridgeinc.com:8004/api/projdocs/${proj}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getpropertyDocs(proj) {
        var url = `http://cm.brookbridgeinc.com:8004/api/propertydocs/${proj}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getprojStatus(buildingid) {
        // should rename api
        var url = `http://cm.brookbridgeinc.com:8004/api/projstatus/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getpropViolationsecb(buildingid) {
        // should rename api
        var url = `http://cm.brookbridgeinc.com:8004/api/propviolationsecb/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getpropViolationsdob(buildingid) {
        // should rename api
        var url = `http://cm.brookbridgeinc.com:8004/api/propviolationsdob/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },

    getBuildingdocs(buildingid) {
        // should rename api
        var url = `http://cm.brookbridgeinc.com:8004/api/findbuildingdocs/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
        return fetch(url, { mode: 'cors' }).then((res) => res.json())
    },
}
//   getlistPosts(type) {
//         var url = `http://cm.brookbridgeinc.com:8005/api/getlistposts/${type}`;
//         return fetch(url, { mode: 'cors' }).then((res) => res.json())
//     },
 
//          getlistTags(type) {
//         // this is workflow no need to jwt
//         // tag = newsfree or news 
//         var url = `http://cm.brookbridgeinc.com:8005/api/getlisttag/${type}`;

//         return fetch(url, { mode: 'cors' }).then((res) => res.json())
//     },
//   getBuildings(userid) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/buildings/${userid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
      
//   },
//   getUsers() {
//         var url = 'http://cm.brookbridgeinc.com:8005/api/users';
//         // s?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc';

//         return fetch(url, { mode: 'cors' }).then((res) => res.json())

//     },
//     getUsersall(type) {
//         // var url = 'http://cm.brookbridgeinc.com:8004/api/users?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc';
//         var url = 'http://cm.brookbridgeinc.com:8005/api/users';

//         return fetch(url, { mode: 'cors' }).then((res) => res.json())

//     },
//   getCharts(buildingid) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/propertycharts/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getChartsDrill(buildingid) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/propertycharts2/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getStatus(buildingid) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/projstatusreport/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getStatusgroup(buildingid) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/projstatusgroup/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getFillings(proj) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/filingdetails/${proj}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getprojDocs(proj) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/projdocs/${proj}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getpropertyDocs(proj) {
//     var url = `http://cm.brookbridgeinc.com:8004/api/propertydocs/${proj}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getprojStatus(buildingid) {
//     // should rename api
//     var url = `http://cm.brookbridgeinc.com:8004/api/projstatus/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getpropViolationsecb(buildingid) {
//     // should rename api
//     var url = `http://cm.brookbridgeinc.com:8004/api/propviolationsecb/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getpropViolationsdob(buildingid) {
//     // should rename api
//     var url = `http://cm.brookbridgeinc.com:8004/api/propviolationsdob/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },

//   getBuildingdocs(buildingid) {
//     // should rename api
//     var url = `http://cm.brookbridgeinc.com:8004/api/findbuildingdocs/${buildingid}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;
//     return fetch(url).then((res) => res.json())
//   },
 
//  getbcsStatus(bcsnumber) {
//         // this is workflow no need to jwt ie 151024
//         var url = `http://cm.brookbridgeinc.com/api/contract/${bcsnumber}`;
//         return fetch(url, { mode: 'cors' }).then((res) => res.json())
//     },

//     getbcsStatus2(bcsnumber) {

//         var url = `http://cm.brookbridgeinc.com:8004/api/projstatusbcs/${bcsnumber}?token=eyJhbGciOiJIUzI1NiJ9.NTNmMTY3NjllZTk5YTBmMDFlYWM0N2Q4.cx_Qv913lp4Q7lj-QsQUJ8w4DdDM16SRv3_BzraUPrc`;

//         return fetch(url, { mode: 'cors' }).then((res) => res.json())
//     }

 
// }
