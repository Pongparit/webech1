$(document).ready(function() {
  // $('#checkTable').on('click', 'tbody tr', function(event) {
  //   console.log("dd");
  //     });

      $("tr").popover({
                       html: true,
                       animation: true,
                       content: '<input type="text" name="qrcode" value="" placeholder="QRCode"> <input type="button" name="" value="ลงชื่อ">',
                       placement: "right",
                   });


                  //  ถ้าเป็นอาจารย์ให้ใช้อันนี้
                  //  $("tr").popover({
                  //                   html: true,
                  //                   animation: true,
                  //                   content: '<input type="text" name="countstudent" value="" placeholder="เช็คจำนวนนักเรียน"> <input type="button" name="" value="ตรวจสอบ">',
                  //                   placement: "right",
                  //               });
} );
