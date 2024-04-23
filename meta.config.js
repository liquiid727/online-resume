const character = {
  name: "Liquiid梨亏得",
  skills: ["react", "js", "next", "react", "astro","node.js"],
  wechatId:'xiaolin07laixi',
  phoneNumber:'15868755240',
  email:'liquiid727@outlook.com',
  city:"Hangzhou,China",
  github:"https://github.com/Liquiid727",
  yuque:"https://liquiid727.github.io/",
}




export default {
  name: character.name,
  skills: character.skills,
  wechatId:btoa(character.wechatId),
  phoneNumber:btoa(character.phoneNumber),
  email:character.email,
  city:"Hangzhou,China",
  github:"https://github.com/Liquiid727",
  yuque:"https://liquiid727.github.io/",
};
