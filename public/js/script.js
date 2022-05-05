
const getLinkLabel = (labelName) => {
  if (labelName === "Blue Note") return "https://www.bluenote.com/";
  if (labelName === "Columbia") return "http://www.columbiarecords.com/";
  if (labelName === "Impulse!") return "http://www.impulserecords.com/";
}

const MsgTraductor = (msg) => {
  if (msg === '"name" is not allowed to be empty') return "se debe ingresar nombre";
  if (msg === '"name" length must be at least 5 characters long') return "el nombre debe tener un mínimo de 5 caracteres";
  if (msg === '"email" is not allowed to be empty') return "se debe ingresar email";
  if (msg === 'email already registered') return "correo ya registrado";
  if (msg === '"password" is not allowed to be empty') return "se debe ingresar contraseña";
  if (msg === '"password" must only contain alpha-numeric characters') return "la contraseña no debe tener espacios";
  if (msg === '"password" length must be at least 6 characters long') return "el contraseña debe tener un mínimo de 6 caracteres";
  if (msg === 'no user exists') return "usuario no registrado";
  if (msg === 'Incorrect password') return "contraseña incorrecta";
  if (msg === '"artist" is not allowed to be empty') return "se debe ingresar nombre musico";
  if (msg === '"genre" is not allowed to be empty') return "se debe ingresar genero musical";
  if (msg === '"release_year" must be a number') return "se debe ingresar año de lanzamineto";
  if (msg === '"release_year" must be greater than or equal to 1948') return "el año de lanzamineto debe ser mayor o igual a 1948";
  if (msg === '"release_year" must be less than or equal to 2022') return "el año de lanzamineto debe ser menor o igual al año actual";
  if (msg === '"label" is not allowed to be empty') return "se debe ingresar sello discográfico";
  if (msg === '"label" length must be at least 5 characters long') return "el sello discográfico debe tener un mínimo de 5 caracteres";
  if (msg === '"price" must be a number') return "se debe ingresar un precio";
  if (msg === '"url" is not allowed to be empty') return "se debe ingresar código de spotify";
  if (msg === '"url" length must be at least 22 characters long') return "el código debe tener 22 caracteres";
  if (msg === '"url" length must be less than or equal to 22 characters long') return "el código debe tener 22 caracteres";
  if (msg === '"url" must only contain alpha-numeric characters') return "el código no debe tener signos";
  if (msg === '"cover" is not allowed to be empty') return "se debe ingresar url del cover";
  if (msg === '"cover" must be a valid uri') return "formato de url inválido";
}





