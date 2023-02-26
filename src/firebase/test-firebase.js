import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();


export const dataForYou = firestore.collection('users')
.doc('vDX6s7MN1qNp5QSDWgMe')
.collection('cartItems')
.doc('qW1WlJalMaSFW9lBMu6m');


//firestore.doc('/users/vDX6s7MN1qNp5QSDWgMe/cartItems/qW1WlJalMaSFW9lBMu6m')