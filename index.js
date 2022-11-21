async function load() {
  let { hi, bye, default: def } = await import("./say.js");
  hi("Andrey");
  bye("Sergey");
  def();
}

load();
