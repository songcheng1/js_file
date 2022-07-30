# Android
public final String sign(byte[] data, String privateKey) {
    byte[] decode = Base64.decode(privateKey, 2);
    RSAPrivateKey rSAPrivateKey = RSAPrivateKey.getInstance(decode);
    RSAPrivateKeySpec rSAPrivateKeySpec = new RSAPrivateKeySpec(rSAPrivateKey.getModulus(), rSAPrivateKey.getPrivateExponent());
    KeyFactory keyFactory = KeyFactory.getInstance("RSA");
    PrivateKey generatePrivate = keyFactory.generatePrivate(rSAPrivateKeySpec);
    Signature signature = Signature.getInstance("SHA256withRSA");
    signature.initSign(generatePrivate);
    signature.update(data);
    String result = Base64.encodeToString(signature.sign(), 2);
    return result;
}   



# Python
def RSASecret(data, privateKey):
    private_keyBytes = base64.b64decode(privateKey)
    priKey = RSA.importKey(private_keyBytes)
    signer = PKCS1_v1_5.new(priKey, )
    hash_obj = SHA256.new(data.encode('utf-8'))
    signature = base64.b64encode(signer.sign(hash_obj))
    sign = signature.decode()
    return sign
    
