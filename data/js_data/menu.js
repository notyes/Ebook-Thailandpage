if ( false )
{

var menus = [ 
				{
					name:'ปกหน้า',
					link:'../pdf/show/file/0.pdf',
					icon:'../images/category-logo/icon/0.png',
					subCategory: sub01,
				},
				{
					name:'ก่อสร้าง-วัสดุ, รับเหมา, ป้ายโฆษณา / CONSTRUCTION, SIGNS',
					link:'#ก่อสร้าง-วัสดุ, รับเหมา, ป้ายโฆษณา / CONSTRUCTION, SIGNS',
					icon:'../images/category-logo/icon/1.png',
					subCategory: sub01,
				},
				{
					name:'เครื่องจักรกล / MACHINERY',
					link:'#เครื่องจักรกล / MACHINERY',
					icon:'../images/category-logo/icon/2.png',
					subCategory: sub02,
				},
				{
					name:'เครื่องจักรแปรรูปอาหาร, เครื่องจักรอุปกรณ์สำหรับใช้ในอุตสาหกรรมอาหาร / FOOD PROCESSING MACHINERY – EQUIPMENT, MACHINERY & EQUIPMENT USED FOR FOOD INDUSTRY',
					link:'#เครื่องจักรแปรรูปอาหาร, เครื่องจักรอุปกรณ์สำหรับใช้ในอุตสาหกรรมอาหาร / FOOD PROCESSING MACHINERY – EQUIPMENT, MACHINERY & EQUIPMENT USED FOR FOOD INDUSTRY',
					icon:'../images/category-logo/icon/3.png',
					subCategory: sub03,
				},
				{
					name:'เครื่องมือ และอุปกรณ์ / TOOLS & INSTRUMENTS',
					link:'#เครื่องมือ และอุปกรณ์ / TOOLS & INSTRUMENTS',
					icon:'../images/category-logo/icon/4.png',
					subCategory: sub04,
				},
				{
					name:'อุปกรณ์ขนส่ง และลำเลียง / MATERIAL HANDLING',
					link:'#อุปกรณ์ขนส่ง และลำเลียง / MATERIAL HANDLING',
					icon:'../images/category-logo/icon/5.png',
					subCategory: sub05,
				},
				{
					name:'วาล์ว, ปั๊ม, ท่อ, นิวเมติก, ไฮดรอลิก / VALVES, PUMPS, PIPES, PNEUMATIC EQUIPMENT & HYDRAULIC',
					link:'#วาล์ว, ปั๊ม, ท่อ, นิวเมติก, ไฮดรอลิก / VALVES, PUMPS, PIPES, PNEUMATIC EQUIPMENT & HYDRAULIC',
					icon:'../images/category-logo/icon/6.png',
					subCategory: sub06,
				},
				{
					name:'เหล็ก, อะลูมิเนียม, งานโลหะ / METAL & METAL WORKING',
					link:'#เหล็ก, อะลูมิเนียม, งานโลหะ / METAL & METAL WORKING',
					icon:'../images/category-logo/icon/7.png',
					subCategory: sub07,
				},
				{
					name:'พลาสติก, เคมีภัณฑ์, แก๊ส, น้ำมัน, ยาง / CHEMICALS, PLASTICS, GAS',
					link:'#พลาสติก, เคมีภัณฑ์, แก๊ส, น้ำมัน, ยาง / CHEMICALS, PLASTICS, GAS',
					icon:'../images/category-logo/icon/8.png',
					subCategory: sub08,
				},
				{
					name:'ไฟฟ้า, อิเล็กทรอนิกส์, คอมพิวเตอร์ / ELECTRIC, ELECTRONIC EQUIPMENT, COMPUTER',
					link:'#ไฟฟ้า, อิเล็กทรอนิกส์, คอมพิวเตอร์ / ELECTRIC, ELECTRONIC EQUIPMENT, COMPUTER',
					icon:'../images/category-logo/icon/9.png',
					subCategory: sub09,
				},
				{
					name:'บรรจุภัณฑ์ และการจัดเก็บสินค้า / PACKAGING & STORAGING',
					link:'#บรรจุภัณฑ์ และการจัดเก็บสินค้า / PACKAGING & STORAGING',
					icon:'../images/category-logo/icon/10.png',
					subCategory: sub10,
				},
				{
					name:'รถยนต์ - อุปกรณ์และอะไหล่ / AUTOMOTIVE INDUSTRY',
					link:'#รถยนต์ - อุปกรณ์และอะไหล่ / AUTOMOTIVE INDUSTRY',
					icon:'../images/category-logo/icon/11.png',
					subCategory: sub11,
				},
				{
					name:'พลังงานทางเลือกเพื่อสิ่งแวดล้อม, น้ำ, ระบบบำบัดน้ำ และควบคุมมลภาวะ / RENEWABLE ENERGY (ENVIRONMENTAL), WATER PROCESSING & POLLUTION CONTROL',
					link:'#พลังงานทางเลือกเพื่อสิ่งแวดล้อม, น้ำ, ระบบบำบัดน้ำ และควบคุมมลภาวะ / RENEWABLE ENERGY (ENVIRONMENTAL), WATER PROCESSING & POLLUTION CONTROL',
					icon:'../images/category-logo/icon/12.png',
					subCategory: sub12,
				},
				{
					name:'เครื่องใช้สำนักงาน, โทรศัพท์, เครื่องเขียน, เฟอร์นิเจอร์ และตกแต่ง, บริการทำบัญชี / OFFICE AUTOMATION, TELEPHONES, STATIONARIES, FURNITURE & INTERIOR DESIGN, ACCOUNTING SERVICES',
					link:'#เครื่องใช้สำนักงาน, โทรศัพท์, เครื่องเขียน, เฟอร์นิเจอร์ และตกแต่ง, บริการทำบัญชี / OFFICE AUTOMATION, TELEPHONES, STATIONARIES, FURNITURE & INTERIOR DESIGN, ACCOUNTING SERVICES',
					icon:'../images/category-logo/icon/13.png',
					subCategory: sub13,
				},
				{
					name:'แอร์, เครื่องทำความเย็น / AIR CONDITIONING & REFRIGERATING EQUIPMENT',
					link:'#แอร์, เครื่องทำความเย็น / AIR CONDITIONING & REFRIGERATING EQUIPMENT',
					icon:'../images/category-logo/icon/14.png',
					subCategory: sub14,
				},
				{
					name:'โลจิสติกส์ และธุรกิจขนส่ง / LOGISTICS & TRANSPORT',
					link:'#โลจิสติกส์ และธุรกิจขนส่ง / LOGISTICS & TRANSPORT',
					icon:'../images/category-logo/icon/15.png',
					subCategory: sub15,
				},
				{
					name:'ปกหลัง',
					link:'../pdf/show/file/end.pdf',
					icon:'../images/category-logo/icon/end.png',
					subCategory: sub15,
				},


			];	


}else{

var menus = [ 
				{
					name:'ปกหน้า',
					link:'../pdf/show/index.html?file=file/0.pdf',
					icon:'../images/category-logo/icon/0.png',
					subCategory: sub01,
				},
				{
					name:'ก่อสร้าง-วัสดุ, รับเหมา, ป้ายโฆษณา / CONSTRUCTION, SIGNS',
					link:'#ก่อสร้าง-วัสดุ, รับเหมา, ป้ายโฆษณา / CONSTRUCTION, SIGNS',
					icon:'../images/category-logo/icon/1.png',
					subCategory: sub01,
				},
				{
					name:'เครื่องจักรกล / MACHINERY',
					link:'#เครื่องจักรกล / MACHINERY',
					icon:'../images/category-logo/icon/2.png',
					subCategory: sub02,
				},
				{
					name:'เครื่องจักรแปรรูปอาหาร, เครื่องจักรอุปกรณ์สำหรับใช้ในอุตสาหกรรมอาหาร / FOOD PROCESSING MACHINERY – EQUIPMENT, MACHINERY & EQUIPMENT USED FOR FOOD INDUSTRY',
					link:'#เครื่องจักรแปรรูปอาหาร, เครื่องจักรอุปกรณ์สำหรับใช้ในอุตสาหกรรมอาหาร / FOOD PROCESSING MACHINERY – EQUIPMENT, MACHINERY & EQUIPMENT USED FOR FOOD INDUSTRY',
					icon:'../images/category-logo/icon/3.png',
					subCategory: sub03,
				},
				{
					name:'เครื่องมือ และอุปกรณ์ / TOOLS & INSTRUMENTS',
					link:'#เครื่องมือ และอุปกรณ์ / TOOLS & INSTRUMENTS',
					icon:'../images/category-logo/icon/4.png',
					subCategory: sub04,
				},
				{
					name:'อุปกรณ์ขนส่ง และลำเลียง / MATERIAL HANDLING',
					link:'#อุปกรณ์ขนส่ง และลำเลียง / MATERIAL HANDLING',
					icon:'../images/category-logo/icon/5.png',
					subCategory: sub05,
				},
				{
					name:'วาล์ว, ปั๊ม, ท่อ, นิวเมติก, ไฮดรอลิก / VALVES, PUMPS, PIPES, PNEUMATIC EQUIPMENT & HYDRAULIC',
					link:'#วาล์ว, ปั๊ม, ท่อ, นิวเมติก, ไฮดรอลิก / VALVES, PUMPS, PIPES, PNEUMATIC EQUIPMENT & HYDRAULIC',
					icon:'../images/category-logo/icon/6.png',
					subCategory: sub06,
				},
				{
					name:'เหล็ก, อะลูมิเนียม, งานโลหะ / METAL & METAL WORKING',
					link:'#เหล็ก, อะลูมิเนียม, งานโลหะ / METAL & METAL WORKING',
					icon:'../images/category-logo/icon/7.png',
					subCategory: sub07,
				},
				{
					name:'พลาสติก, เคมีภัณฑ์, แก๊ส, น้ำมัน, ยาง / CHEMICALS, PLASTICS, GAS',
					link:'#พลาสติก, เคมีภัณฑ์, แก๊ส, น้ำมัน, ยาง / CHEMICALS, PLASTICS, GAS',
					icon:'../images/category-logo/icon/8.png',
					subCategory: sub08,
				},
				{
					name:'ไฟฟ้า, อิเล็กทรอนิกส์, คอมพิวเตอร์ / ELECTRIC, ELECTRONIC EQUIPMENT, COMPUTER',
					link:'#ไฟฟ้า, อิเล็กทรอนิกส์, คอมพิวเตอร์ / ELECTRIC, ELECTRONIC EQUIPMENT, COMPUTER',
					icon:'../images/category-logo/icon/9.png',
					subCategory: sub09,
				},
				{
					name:'บรรจุภัณฑ์ และการจัดเก็บสินค้า / PACKAGING & STORAGING',
					link:'#บรรจุภัณฑ์ และการจัดเก็บสินค้า / PACKAGING & STORAGING',
					icon:'../images/category-logo/icon/10.png',
					subCategory: sub10,
				},
				{
					name:'รถยนต์ - อุปกรณ์และอะไหล่ / AUTOMOTIVE INDUSTRY',
					link:'#รถยนต์ - อุปกรณ์และอะไหล่ / AUTOMOTIVE INDUSTRY',
					icon:'../images/category-logo/icon/11.png',
					subCategory: sub11,
				},
				{
					name:'พลังงานทางเลือกเพื่อสิ่งแวดล้อม, น้ำ, ระบบบำบัดน้ำ และควบคุมมลภาวะ / RENEWABLE ENERGY (ENVIRONMENTAL), WATER PROCESSING & POLLUTION CONTROL',
					link:'#พลังงานทางเลือกเพื่อสิ่งแวดล้อม, น้ำ, ระบบบำบัดน้ำ และควบคุมมลภาวะ / RENEWABLE ENERGY (ENVIRONMENTAL), WATER PROCESSING & POLLUTION CONTROL',
					icon:'../images/category-logo/icon/12.png',
					subCategory: sub12,
				},
				{
					name:'เครื่องใช้สำนักงาน, โทรศัพท์, เครื่องเขียน, เฟอร์นิเจอร์ และตกแต่ง, บริการทำบัญชี / OFFICE AUTOMATION, TELEPHONES, STATIONARIES, FURNITURE & INTERIOR DESIGN, ACCOUNTING SERVICES',
					link:'#เครื่องใช้สำนักงาน, โทรศัพท์, เครื่องเขียน, เฟอร์นิเจอร์ และตกแต่ง, บริการทำบัญชี / OFFICE AUTOMATION, TELEPHONES, STATIONARIES, FURNITURE & INTERIOR DESIGN, ACCOUNTING SERVICES',
					icon:'../images/category-logo/icon/13.png',
					subCategory: sub13,
				},
				{
					name:'แอร์, เครื่องทำความเย็น / AIR CONDITIONING & REFRIGERATING EQUIPMENT',
					link:'#แอร์, เครื่องทำความเย็น / AIR CONDITIONING & REFRIGERATING EQUIPMENT',
					icon:'../images/category-logo/icon/14.png',
					subCategory: sub14,
				},
				{
					name:'โลจิสติกส์ และธุรกิจขนส่ง / LOGISTICS & TRANSPORT',
					link:'#โลจิสติกส์ และธุรกิจขนส่ง / LOGISTICS & TRANSPORT',
					icon:'../images/category-logo/icon/15.png',
					subCategory: sub15,
				},
				{
					name:'ปกหลัง',
					link:'../pdf/show/index.html?file=file/end.pdf',
					icon:'../images/category-logo/icon/end.png',
					subCategory: sub15,
				},


			];	



}



