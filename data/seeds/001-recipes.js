exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "chicken vesuvio",
          instructions: "cook the chicken",
          servings: "10",
          dish: "chicago italian"
        },
        {
          name: "korean fried chicken",
          instructions: "cook the chicken",
          servings: "10",
          dish: "korean"
        },
        {
          name: "chicken parm",
          instructions: "cook the chicken",
          servings: "10",
          dish: "italian"
        }
      ]);
    });
};
