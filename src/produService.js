import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseFirestore } from './firebase';

const crearrestaurante = async (restaurante) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/restaurantes'));
    await setDoc(nuevoDoc, restaurante); 
    console.log('restaurantes creado');
}

const listarestaurante = async () => {
    console.log('aqui');
    const restauranteRef = collection(FirebaseFirestore, '/restaurantes');
    
    const docs = await getDocs(restauranteRef); 
    const restaurante = [];
    docs.forEach(document => {
        console.log(document.id, document.data());
        restaurante.push({
            id: document.id,
            nombre: document.data().nombre,
            descripcion: document.data().descripcion,
            direccion: document.data().direccion,
            imagen: document.data().imagen,
        });
    });
    console.log(restaurante);
    return restaurante;
}

export {
    crearrestaurante,
    listarestaurante,
}