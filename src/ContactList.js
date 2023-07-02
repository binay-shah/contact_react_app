import { useState } from 'react'; 

function ContactList(props){    

    const [state, setState] = useState({ query: ''  })

    const {contacts, onDeleteContact } = props
    const { query } = state

   const updateQuery = (query) => {
        setState(() => ({
            query: query.trim()
        }))
   }

   let showingContacts = query === '' 
   ? contacts 
   : contacts.filter((c) => (
       c.name.toLowerCase().includes(query.toLowerCase())
   ))

   const clearQuery = () => {
    updateQuery('')
   }

    return (        
        <div className="list-contacts">

            <div className="list-contacts-top">
                <input 
                    className='search-contacts'
                    type='text'
                    placeholder='Search contacts'
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                />
                
            </div>
            { showingContacts.length !== contacts.length && (
                <div className='showing-contacts'>
                    <span>Now showing {showingContacts.length} of {contacts.length}</span>
                    <button onClick={clearQuery}>Show all</button>
                </div>
            )}

            <ol className='contact-list'>
                {showingContacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                            background: `url(${contact.avatarURL})`
                        }}
                        ></div>
                        <div className="contact-details">
                            <p className="">{contact.name}</p>
                            <p className="">{contact.handle}</p>
                        </div>
                        <button   
                            onClick = {() => {onDeleteContact(contact)}}                          
                            className="contact-remove">Remove</button>
                    </li>
                    
                    
                ))}
            </ol>
        </div>
            
        

        
    )

}

export default ContactList;



// import logo from './logo.svg';
// import './App.css';
// import ContactList from './ContactList';


// const profiles = [
//   {
//     id: 1,
//     userID: "1",
//     favoriteMovieID: "1"
//   },
//   {
//     id: 2,
//     userID: "2",
//     favoriteMovieID: "1"
//   },
//   {
//     id: 3,
//     userID: "4",
//     favoriteMovieID: "5"
//   },
//   {
//     id: 4,
//     userID: "5",
//     favoriteMovieID: "2"
//   },
//   {
//     id: 5,
//     userID: "3",
//     favoriteMovieID: "5"
//   },
//   {
//     id: 6,
//     userID: "6",
//     favoriteMovieID: "4"
//   }
// ];

// const users = {
//   1: {
//     id: 1,
//     name: "Jane Cruz",
//     userName: "coder"
//   },
//   2: {
//     id: 2,
//     name: "Matthew Johnson",
//     userName: "mpage"
//   },
//   3: {
//     id: 3,
//     name: "Autumn Green",
//     userName: "user123"
//   },
//   4: {
//     id: 3,
//     name: "John Doe",
//     userName: "user123"
//   },
//   5: {
//     id: 5,
//     name: "Lauren Carlson",
//     userName: "user123"
//   },
//   6: {
//     id: 6,
//     name: "Nicholas Lain",
//     userName: "user123"
//   }
// };

// const movies = {
//   1: {
//     id: 1,
//     name: "Planet Earth"
//   },
//   2: {
//     id: 2,
//     name: "Selma"
//   },
//   3: {
//     id: 3,
//     name: "Million Dollar Baby"
//   },
//   4: {
//     id: 4,
//     name: "Forrest Gump"
//   },
//   5: {
//     id: 5,
//     name: "Get Out"
//   }
// };

// const contacts = [
//   {
//     "id": "karen",
//     "name": "Karen Isgrigg",
//     "handle": "karen_isgrigg",
//     "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"

//   },
//   {
//     "id": "richard",
//     "name": "Richard Kalehoff",
//     "handle": "richardkalehoff",
//     "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
//   },
//   {
//     "id": "tyler",
//     "name": "Tyler McGinnis",
//     "handle": "tylermcginnis",
//     "avatarURL": "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
//   }
//  ];


// function App() {

//   return (
//     <div>
//       <ul>
//       {profiles.map((profile) => {
//         const userName = users[profile.userID].name
//         const favMovieName = movies[profile.favoriteMovieID].name
//         return (
//           <li>
//           <p>{`${userName} favourite movie is ${favMovieName}`}</p>
//           </li>
//         )
//     })} 
//   </ul>
// </div>
//   )
  
// }

// export default App;

// import { useState } from 'react';

// export default function InputComponent() { 
//   const [inputText, setText] = useState('hello'); 

//   function handleChange(e) { 
//     setText(e.target.value); 
//   } 

//   return ( 
//     <> 
//       <input value={inputText} onChange={handleChange} /> 
//       <p>You typed: {inputText}</p> 
//       <button onClick={() => setText('hello')}> 
//         Reset 
//       </button> 
//     </> 
//   ); 
// } 

// import { useState } from 'react'; 

// export default function RegisterForm() { 
//   const [form, setForm] = useState({ 
//     firstName: 'Luke', 
//     lastName: 'Jones', 
//     email: 'lukeJones@sculpture.com', 
//   }); 

//   return ( 
//     <> 
//       <label> 
//         First name: 
//         <input 
//           value={form.firstName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               firstName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Last name: 
//         <input 
//           value={form.lastName} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               lastName: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <label> 
//         Email: 
//         <input 
//           value={form.email} 
//           onChange={e => { 
//             setForm({ 
//               ...form, 
//               email: e.target.value 
//             }); 
//           }} 
//         /> 
//       </label> 
//       <p> 
//         {form.firstName}{' '} 
//         {form.lastName}{' '} 
//         ({form.email})
//       </p> 
//     </> 
//   ); 
// } 

// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }
// <button onClick={() => console.log('second example')}>
//     An inline anonymous ES6 function event handler
// </button>
// function App() {
//       function thirdExample() {
//           console.log('third example');
//       };
//       return (
//           <div className="thirdExample">
//               <button onClick={thirdExample}>
//                   using a separate function declaration
//               </button>
//           </div>
//       );
//   };
//   export default App;

//   function App() {
//         const fourthExample = () => console.log('fourth example');
    
//         return (
//             <div className="fourthExample">
//                 <button onClick={fourthExample}>
//                     using a separate function expression
//                 </button>
//             </div>
//       );
//     };
//     export default App;

//     function App() {

//         function handleClick() {
//           let randomNum = Math.floor(Math.random() * 3) + 1;
//           console.log(randomNum);
//           let userInput = prompt('type a number');
//           alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
//         }
      
//         return (
//           <div>
//             <h1>Task: Add a button and handle a click event</h1>
//             <button onClick={handleClick}>Guess the number between 1 and 3</button>
//           </div>
//         );
//       }
      
//       export default App;

//       import { useState } from "react"; 
 
// export default function App() { 
//   const [greeting, setGreeting] = useState( 
//     { 
//         greet: "Hello", 
//         place: "World" 
//     } 
//   ); 
//   console.log(greeting, setGreeting); 
 
//   function updateGreeting() { 
//     setGreeting(prevState => { 
//         return {...prevState, place: "World-Wide Web"} 
//     }); 
//   } 
 
//   return ( 
//     <div> 
//       <h1>{greeting.greet}, {greeting.place}</h1> 
//       <button onClick={updateGreeting}>Update greeting</button> 
//     </div> 
//   ); 
// } 
