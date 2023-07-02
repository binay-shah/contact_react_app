import serialize from "form-serialize";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";





function CreateContact(props){

    const handleSubmit = (event) => {
        event.preventDefault()
        let obj = serialize(event.target, { hash: true });
        //obj.avatarURL=  "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        console.log(obj)
        props.onAddContact(obj)
    }

    return (
        <div>
            <Link 
                className="close-create-contact" to='/' >Close</Link>

            <form onSubmit={handleSubmit} className='create-contact-form'>
            <ImageInput
             className='create-contact-avatar-input'
             name='avatarURL'
             maxHeight={64}
          />
                <div className='create-contact-details'>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                    <button>Add Contact</button>
                </div>
            </form> 
        </div>
    )
}

export default CreateContact;


//npm install form-serialize



// <form onSubmit={this.handleSubmit} className='create-contact-form'>
//           <ImageInput
//             className='create-contact-avatar-input'
//             name='avatarURL'
//             maxHeight={64}
//           />
//           <div className='create-contact-details'>
//             <input type='text' name='name' placeholder='Name' />
//             <input type='text' name='handle' placeholder='Handle' />
//             <button>Add Contact</button>
//           </div>
//         </form>

/* <Link className="close-create-contact"
to='/'
>Close</Link> */

// const handleSubmit = (event) => {
//     event.preventDefault();        
//     let obj = serialize(event.target, { hash: true });
//     obj.avatarURL=  "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
//     props.onAddContact(obj);

// }
// return (
//     <div>
//         <Link className="close-create-contact"
//             to='/'
//         >Close</Link>

//         <form onSubmit={handleSubmit} className='create-contact-form'>
//             <div className='create-contact-details'>
//                 <input type='text' name='name' placeholder='Name' />
//                 <input type='text' name='handle' placeholder='Handle' />
//                 <button>Add Contact</button>
//             </div>
//         </form> 

//     </div>
// )