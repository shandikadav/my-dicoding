const map = new Map();
map.set("name", "Shandika");
console.log(map); // Output: Map { 'name' => 'Shandika' }

map.set(1, "Satu");
console.log(map); // Output: Map { 'name' => 'Shandika', 1 => 'Satu' }

// mengakses map
console.log(map.get("name")); // Output: Shandika

// menghapus nilai di Map
map.set("last name", "Shandika");
console.log(map); // Output: Map { 'name' => 'Shandika', 1 => 'Satu', 'last name' => 'Shandika' }

map.delete("last name");
console.log(map); // Output: Map { 'name' => 'Shandika', 1 => 'Satu' }
