import { Root } from "../interface";

export const sortDate = (element: string) => {
    let d = new Date( Date.parse(element) );
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let time = d.toLocaleTimeString()
    let date = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + ' ' + time.slice(0,4) + time.slice(7);
    return date;
  }

  export const determineClass = (element: string) =>{
    var desktopOnly = ['Organiation','Date Joined']
    if(desktopOnly.includes(element))
      return 'desktop_only'
    else if(element == 'Email')
      return 'desktop_tablet'
    else
      return ''
  }

  export const checkStatus = (x: string) => {
    var status = localStorage.getItem("userData");
    if(status != undefined){
      let data = JSON.parse(status)
      let searchObject= data.find((element: { id: string, status: string; }) => element.id == x);
      return searchObject.status
  }
}
  export const tableUser = (elements: Root, x: number, y: number) => {
    let result = elements.slice(x,y).map((element) => {
          return { org: element.orgName, username: element.userName, email: element.email, phone: element.phoneNumber, date: sortDate(element.createdAt), status: checkStatus(element.id), id: element.id };
        });
        return result   
}
function storeData(elements: []){
  var status = localStorage.getItem("userData");
  if(status == undefined){
    localStorage.setItem("userData", JSON.stringify(elements));
  } 
}
export async function getData() {
    const response = await fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users');
    const data = await response.json();
    let result = data.map((element: { id: string; }) => {
      return { id: element.id, status: 'pending'  };
    });
    storeData(result)
    return data
}

export async function setStatus(x: string, y: string) {
  var status = localStorage.getItem("userData");
  if(status != undefined){
    let arr = JSON.parse(status)
    const index = arr.findIndex((object: { id: string, status: string; }) => {
      return object.id == x;
    });
    if (index !== -1) {
      arr[index].status = y;
    }
    localStorage.setItem("userData", JSON.stringify(arr));
  } 
}