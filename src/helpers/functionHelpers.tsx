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