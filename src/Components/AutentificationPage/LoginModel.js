import React, {useState} from 'react';

function LoginModel({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});
    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }
    return (
        <div>
        <form onSubmit={submitHandler}>
            <div className='form-inner'>
                <div className='uplogin-image-container'>
                    <img src="https://cdn.britannica.com/05/58605-050-86F58113/Annapurna-massif-village-Nepal.jpg" alt="autImg" className='autentification-image'/>
                    <div className="image-child"><span>Autentification </span></div>
                </div>
                    {(error != "") ? (<div className='error-show'>Details do not match</div>) : '' }
                 <div className='form-group '>
                     <label htmlFor='name' className='login-label'>Name:</label>
                     <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} placeholder='Enter your name'  className='login-input'/>
                 </div>
                 <div className='form-group '>
                     <label htmlFor='email'  className='login-label'>Email:</label>
                     <input type="text" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} placeholder='Enter your email' className='login-input'/>
                 </div>
                 <div className='form-group '>
                     <label htmlFor='password' className='login-label'>Password:</label>
                     <input type="text" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} placeholder='Enter your password'  className='login-input'/>
                </div>
                <div className='login-container'>
                    <input type="submit" value="LOGIN" className='login-button' />
                </div>
            </div>
        </form>
        </div>
    );
}

export default LoginModel;