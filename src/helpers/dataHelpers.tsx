import icon1 from '../assets/flaticons/icon1.svg'
import icon2 from '../assets/flaticons/icon2.svg'
import icon3 from '../assets/flaticons/icon3.svg'
import icon4 from '../assets/flaticons/icon4.svg'
import userFriends1 from '../assets/icons/user-friends1.svg'
import users1 from '../assets/icons/users1.svg'
import sack1 from '../assets/icons/sack1.svg'
import handshake from '../assets/icons/handshake-regular1.svg'
import piggybank from '../assets/icons/piggy-bank1.svg'
import Group104 from '../assets/icons/Group104.svg'
import userCheck from '../assets/icons/user-check1.svg'
import userTime from '../assets/icons/user-times1.svg'
import bank from '../assets/icons/bank.svg'
import coins from '../assets/icons/coins-solid.svg'
import icon from '../assets/icons/icon.svg'
import galaxy from '../assets/icons/galaxy.svg'
import userCog from '../assets/icons/user-cog.svg'
import scroll from '../assets/icons/scroll.svg'
import chart from '../assets/icons/chart-bar.svg'
import sliders from '../assets/icons/sliders-h.svg'
import badge from '../assets/icons/badge-percent1.svg'
import clipboard from '../assets/icons/clipboard-list1.svg'
import brief from '../assets/icons/briefcase.svg'

export const cards = [
    {icon: icon1, text: 'USERS', number: '2,453'},
    {icon: icon2, text: 'ACTIVE USERS', number: '2,453'},
    {icon: icon3, text: 'USERS WITH LOANS', number: '12,453'},
    {icon: icon4, text: 'USERS WITH SAVINGS', number: '102,453'},
  ]

export const tableHeader = ['Organiation','Username','Email','Phone Number','Date Joined','Status']
 
export const settings = [
  {text: 'Preference', icon: sliders, page:'error', linkDisabled: true},
  {text: 'Fees and Pricing', icon: badge, page:'error', linkDisabled: true },
  {text: 'Audit Logs', icon: clipboard, page:'error', linkDisabled: true },
 
];
export const business = [
  {text: 'Organization', icon: brief , page:'error', linkDisabled: true},
  {text: 'Loan Products', icon: Group104, page:'error', linkDisabled: true },
  {text: 'Saving Products', icon: bank, page:'error', linkDisabled: true },
  {text: 'Fees and Charges', icon: coins, page:'error', linkDisabled: true },
  {text: 'Transactions', icon: icon, page:'error', linkDisabled: true },
  {text: 'Services', icon: galaxy, page:'error', linkDisabled: true },
  {text: 'Service Amount', icon: userCog, page:'error', linkDisabled: true },
  {text: 'Settlements', icon: scroll, page:'error', linkDisabled: true },
  {text: 'Reports', icon: chart, page:'error', linkDisabled: true },
];
export const customers = [
  {text: 'Users', icon: userFriends1, page:'users', linkDisabled: false },
  {text: 'Guarantors', icon: users1, page:'error', linkDisabled: true },
  {text: 'Loans', icon: sack1, page:'error', linkDisabled: true },
  {text: 'Decision Models', icon: handshake , page:'error', linkDisabled: true},
  {text: 'Savings', icon: piggybank , page:'error', linkDisabled: true},
  {text: 'Loan Requests', icon: Group104 , page:'error', linkDisabled: true},
  {text: 'Whitelist', icon: userCheck , page:'error', linkDisabled: true},
  {text: 'Karma', icon: userTime, page:'error', linkDisabled: true },
];

export const tabDetails = [
  {        link: 'General Details', active: true},
  {        link: 'Documents', active: false },
  {        link: 'Bank Details', active: false },
  {        link: 'Loans', active: false },
  {        link: 'Savings', active: false },
  {        link: 'App and System', active: false}
]