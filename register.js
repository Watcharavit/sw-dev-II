function validate() {
	let company = document.getElementById("company").value
	let size = document.getElementById("size").value
	let table = document.getElementById("table").checked
	let chair = document.getElementById("chair").value
	let name = document.getElementById("name").value
	let phone = document.getElementById("phone").value
	let error = ""
	if (company == "") error += "ชื่อบริษัทห้ามเป็นช่องว่าง "
	if (size == null) error += "ต้องเลือกขนาดบูธ "
	if (isNaN(chair) || chair < 1 || chair > 10) error += "จน.เก้าอี้ได้แค่1-10 "
	if (name == "") error += "ชื่อห้ามเป็นช่องว่าง "
	if (phone == "") error += "เบอร์โทรห้ามเป็นช่องว่าง "
	if (error != "") alert(error)
	else alert("Form submitted")
}
