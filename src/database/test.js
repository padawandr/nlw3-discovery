const dbase = require("./db");
const saveOrphanage = require("./saveOrphanage");

dbase.then(async db => {
  // push data to table
  await saveOrphanage(db, {
    lat: "-15.8276894",
    lng: "-47.9504377",
    name: "Outro Lar",
    description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "(61)99555-5555",
    images: [
      "https://images.unsplash.com/photo-1601180964854-4159eae306bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1580673786010-4cde024ea5b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de visitas Das 8h até as 18h",
    open_on_weekends: "0"
  });

  // pull data from table
  const dbData = await db.all("SELECT * FROM orphanages");
  console.log(dbData);

  // remove data from table
  // await db.run("DELETE from orphanages WHERE id = '4'");
  // await db.run("DELETE from orphanages");
});
