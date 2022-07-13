/**
 * BÀI TẬP 1: Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
 * Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
 *
 *
 * INPUT: NHẬP NGÀY, THÁNG, NĂM
 *
 * PROCESS:
 1: LẤY INPUT 
 2: Nếu là tháng 1, 3, 5, 7, 8, 10, 12 thì có 30 ngày
      Nếu là tháng 4, 6, 9, 11 thì có 31 ngày
      Nếu là tháng 2 và là năm nhuận thì có 29 ngày ngược lại 28 ngày
      Tính năm nhuận = Năm chia hết cho 4 nhưng không chia hết cho 100. Vd:2012, 2016, 2020 Hoặc năm chia hết cho 400
 3: KIỂM TRA NGÀY THÁNG NĂM HỢP LỆ day <= 0 || day > 31 || month <= 0 || month>31 || year <=0
    NGÀY = (NGÀY % NGÀY TRONG THÁNG) + 1. NẾU MÀ ĐÓ LÀ NGÀY CUỐI CÙNG TRONG THÁNG THÌ SẼ TĂNG THÁNG LÊN 1 (month = (month % 12) + 1;)
    NĂM SẼ + THÊM 1 NĂM KHI MÀ (NGÀY NHẬP % TỔNG NGÀY TRONG THÁNG)+1 BẰNG 1 VÀ THÁNG NHẬP = (THÁNG NHẬP % 12) + 1 BẰNG 1

    CÒN NGÀY TRƯỚC ĐÓ THÌ SẼ LẤY NGÀY NHẬP - ĐI 1
 *
 * OUTPUT: NGÀY, THÁNG, NĂM CỦA NGÀY TIẾP THEO VÀ TRƯỚC ĐÓ
 */

var day = 2;
var month = 1 ;
var year = 2000;
var dayInMonth;
var day1 = day;
var month1 = month;
var year1 = year;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayInMonth = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayInMonth = 30;
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
      dayInMonth = 29;
    } else {
      dayInMonth = 28;
    }
    break;
  default:
}
if (day <= 0 || day > 31 || month <= 0 || month>31 || year <=0) {
  console.log("Nhập đúng ngày tháng năm hợp lệ");
} else {
  day = (day % dayInMonth) + 1;
  if (day == 1) {
    month = (month % 12) + 1;
  }
  console.log("Ngày mai:", day, month, year + (month === 1 && day === 1));
}

if (day1 == 1) {
  switch (month1 - 1) {
    case 4:
    case 6:
    case 9:
    case 11:
      day1 = 30;
      break;
    case 2:
      day1 = 28 + ((year1 % 4 == 0 && year1 % 100) || year1 % 400 == 0);
      break;
    default:
      day1 = 31;
  }
  if (month1 == 1) {
    month1 = 12;
    year1--;
  } else {
    month1--;
  }
} else {
  day1--;
}
console.log("Ngày hôm qua", day1, month1, year1);

/**
 * BÀI TẬP 2: Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng của năm nhuận)
 *
 *
 * INPUT: THÁNG, NĂM
 *
 * PROCESS:
 * 1: LẤY INPUT 
 * 2: Nếu là tháng 1, 3, 5, 7, 8, 10, 12 thì có 30 ngày
      Nếu là tháng 4, 6, 9, 11 thì có 31 ngày
      Nếu là tháng 2 và là năm nhuận thì có 29 ngày ngược lại 28 ngày
      Tính năm nhuận = Năm chia hết cho 4 nhưng không chia hết cho 100. Vd:2012, 2016, 2020 Hoặc năm chia hết cho 400
 *
 * OUTPUT: NGÀY, THÁNG, NĂM CỦA NGÀY TIẾP THEO VÀ TRƯỚC ĐÓ
 */

var month = 1;
var year = 2000;
var dayInMonth;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    dayInMonth = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    dayInMonth = 30;
    break;
  case 2:
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
      dayInMonth = 29;
    } else {
      dayInMonth = 28;
    }
    break;
  default:
}
if (month >= 1 && month <= 12 && year > 0) {
  console.log(
    "Số ngày trong tháng",
    month,
    "năm",
    year,
    "là",
    dayInMonth,
    "ngày"
  );
} else {
  console.log("Vui lòng nhập đúng tháng năm hợp lệ!");
}

/**
 * BÀI TẬP 3:Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó.
 *
 * INPUT: SỐ NGUYÊN 3 CHỮ SỐ
 * PROCESS:
 * 1: LẤY INPUT
 * 2: KIỂM TRA CÓ PHẢI LÀ SỐ CÓ 3 CHỮ SỐ KHÔNG 100<=N<=999
 * 3: HÀNG ĐƠN VỊ = N % 10
 *    HÀNG CHỤC = (N / 10) % 10
 *    HÀNG TRĂM = N / 100
 *  SAU ĐÓ SỬ DỤNG SWITCH CASE ĐỂ ĐỌC THEO HÀNG TRĂM, HÀNG CHỤC , HÀNG ĐƠN VỊ
 * 4: IN KẾT QUẢ RA MÀN HÌNH
 * OUTPUT: SỐ NGUYÊN 3 CHỮ SỐ VỪA NHẬP BẰNG CHỮ
 */

var n = 100;
var units = n % 10;
var tens = Math.floor(n / 10) % 10;
var hundreds = Math.floor(n / 100);
if (n < 100 || n > 999) {
  console.log("Nhập số có 2 chữ số");
} else {
  switch (hundreds) {
    case 1:
      //   hundreds = "Một trăm";
      console.log("Một trăm ");
      break;
    case 2:
      //   hundreds = "Hai trăm";
      console.log("Hai trăm");
      break;
    case 3:
      //   hundreds = "Ba trăm";
      console.log("Ba trăm");
      break;
    case 4:
      //   hundreds = "Bốn trăm";
      console.log("Bốn trăm");
      break;
    case 5:
      //   hundreds = "Năm trăm";
      console.log("Năm trăm");
      break;
    case 6:
      //   hundreds = "Sáu trăm";
      console.log("Sáu trăm");
      break;
    case 7:
      //   hundreds = "Bảy trăm";
      console.log("Bảy trăm");
      break;
    case 8:
      //   hundreds = "Tám trăm";
      console.log("Tám trăm");
      break;
    case 9:
      //   hundreds = "Chín trăm";
      console.log("Chín trăm");
      break;
  }
  if (tens % 10 === 0 && units != 0) {
    console.log("lẻ");
  }
  switch (tens) {
    case 1:
      //   tens = "mười";
      console.log("mười");
      break;
    case 2:
      //   tens = "hai mươi";
      console.log("hai mươi");
      break;
    case 3:
      //   tens = "ba mươi";
      console.log("ba mươi");
      break;
    case 4:
      //   tens = "bốn mươi";
      console.log("bốn mươi");
      break;
    case 5:
      //   tens = "năm mươi";
      console.log("năm mươi");
      break;
    case 6:
      //   tens = "sáu mươi";
      console.log("sáu mươi");
      break;
    case 7:
      //   tens = "bảy mươi";
      console.log("bảy mươi");
      break;
    case 8:
      //   tens = "tám mươi";
      console.log("tám mươi");
      break;
    case 9:
      //   tens = "chín mươi";
      console.log("chín mươi");
      break;
  }
  switch (units) {
    case 1:
      //   units = "một";
      console.log("một");
      break;
    case 2:
      //   units = "hai";
      console.log("hai");
      break;
    case 3:
      //   units = "ba";
      console.log("ba");
      break;
    case 4:
      //   units = "bốn";
      console.log("bốn");
      break;
    case 5:
      //   units = "lăm";
      console.log("lăm");
      break;
    case 6:
      //   units = "sáu";
      console.log("sáu");
      break;
    case 7:
      //   units = "bảy";
      console.log("bảy");
      break;
    case 8:
      //   units = "tám";
      console.log("tám");
      break;
    case 9:
      //   units = "chín";
      console.log("chín");
      break;
  }
}
console.log(hundreds, tens, units);

/**
 * BÀI TẬP 4:Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương trình in tên sinh viên xa trường nhất.
 * 
 * INPUT: TÊN + TỌA ĐỘ 3 SINH VIÊN 
 * PROCESS:
 * 1: LẤY INPUT
 * 2: TÍNH TỌA ĐỘ TỪ TRƯỜNG ĐẾN NHÀ 3 SINH VIÊN
 * D = CĂN BẬC 2 CỦA (X2-X1)*(X2-X1) + (Y2-Y1)*(Y2-Y1)
 * 3: SO SÁNH TỪNG QUẢNG ĐƯỜNG CỦA 3 SINH VIÊN VỚI NHAU IF ELSE
 * 4: IN RA SINH VIÊN XA TRƯỜNG NHẤT
 * OUTPUT: TÊN SINH VIÊN XA TRƯỜNG NHẤT 
 *
 */

var student = "John";
var student1 = "Kate";
var student2 = "Lucas";
var x=2,y=2;
var x1=2,y1=4;
var x2=5,y2=5;
var x3=1, y3=1;

// tọa đọ của trường học đến nhà học sinh thứ 1,2,3
var s= Math.sqrt(((x3-x)*(x3-x))+((y3-y)*(y3-y)));
var s1 =  Math.sqrt(((x3-x1)*(x3-x1))+((y3-y1)*(y3-y1)));
var s2 =  Math.sqrt(((x3-x2)*(x3-x2))+((y3-y2)*(y3-y2)));

if(s>s1){
    if(s1>s2){
        console.log(student,"xa trường nhất");
    }
    else{
        if(s>s2){
            console.log(student,"xa trường nhất");
        }else{
            console.log(student2,"xa trường nhất");
        }
    }
}else{
    if(s>s2){
        console.log(student1,"xa trường nhất");
    }else{
        if(s2>s1){
            console.log(student2,"xa trường nhất");
        }else{
            console.log(student1,"xa trường nhất");
        }
    }
}
