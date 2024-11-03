import jwt from 'jsonwebtoken';

export const verificarToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, '55c166770079acf0e96d702cef4d7d5b5b2954a91979a30c27314aa5cd1307ae'); // Reemplaza 'tu_clave_secreta' con tu clave de JWT
        return decoded;
    } catch (error) {
        throw new Error('Token inválido');
    }
};

