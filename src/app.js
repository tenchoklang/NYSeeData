import React from 'react';//relative path
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import AppContainer from './components/AppContainer';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"));






//onAuthStateChanged takes a callback and runs that callback when the authstate is changed
//and in the callback we are provided the user if they are logged in

// firebase.auth().onAuthStateChanged((user)=>{
//     console.log(user);
//     if(user){
//         console.log('user is logged in ID --> ', user.uid);

//         store.dispatch(login(user.uid));
//         //only render if user is logged in
//         store.dispatch(startSetExpenses()).then(()=>{
//             //render on the promise of the startSetExpenses
//             render();
//             //if the user is logged in and is at the login page ('/') then redirect the user
//             //to the dashboard
//             if(history.location.pathname === '/'){
//                 history.push('/dashboard');
//             }
//         });
//     }else{
//         console.log('user is not logged in');
//         store.dispatch(logout());
//         render();
//         //redirect the user to the login page
//         history.push('/');
//     }
// });







