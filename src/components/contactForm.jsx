// basic forums and submit which saves to local storage. 
import { useState } from 'react';

export default function contactForm () {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [message, setMessage] = useState('');

    let [requiredAlert, setRequiredAlert] = useState('');


    const handleSubmit = () => {
        console.log({
            name,
            email,
            message
        });
        setName('');
        setEmail('');
        setMessage('');
    };
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const requiredField = 'All fields are required';
    const handleClickOffName = (e) => {
        if(e.target.value === ''){
            setRequiredAlert(requiredField)
        }
        else{
            setRequiredAlert('');
        };
    };
    const handleClickOffEmail = (e) => {
        if(e.target.value === ''){
            setRequiredAlert(requiredField)
        }
        else{
            setRequiredAlert('');
        };
    };
    const handleClickOffMessage = (e) => {
        if(e.target.value === ''){
            setRequiredAlert(requiredField)
        }
        else{
            setRequiredAlert('');
        }
    };

    return (
        <form className='inputHolder'>
            <div>
                <input 
                    className='spaceSides' 
                    type='text' name='nameInput' 
                    id='nameInput' 
                    placeholder='First and Last name' 
                    onChange={handleNameChange} 
                    onBlur={handleClickOffName}
                    value={name}
                />
            </div>
            
            <div>
                <input 
                    className='spaceSides' 
                    type='email' 
                    name='emailInput' 
                    id='emailInput' 
                    placeholder='email' 
                    onChange={handleEmailChange} 
                    onBlur={handleClickOffEmail}
                    value={email}
                />
            </div>


            <div>
                <input 
                    className='spaceSides' 
                    type='text' 
                    name='messageInput' 
                    id='messageInput' 
                    placeholder='message' 
                    onChange={handleMessageChange} 
                    onBlur={handleClickOffMessage}
                    value={message}
                />
            </div>

            <h3 className='redText'>{requiredAlert}</h3>

            <div>
                <button id='submit' className='button' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    )
}