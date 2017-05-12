    (function(){
    var 
     reportContainer = $('.reportContainer'),
     cache_width = reportContainer.width(),
     a4  =[ 1200,  841.89];  // for a4 size paper width and height
     
    $('#create_pdf').on('click',function(){
     $('body').scrollTop(0);
        alert();
     createPDF();
    });
    //create pdf
    function createPDF(){
     getCanvas().then(function(canvas){
      var 
      img = canvas.toDataURL("image/png"),
      doc = new jsPDF({
              unit:'px', 
              format:'a4'
            });     
            doc.addImage(img, 'pdf', 20, 20);
            doc.save('techumber-html-to-pdf.pdf');
            reportContainer.width(cache_width);
     });
    }
     
    // create canvas object
    function getCanvas(){
     reportContainer.width((a4[0]*1.33333) -80).css('max-width','none');
     return html2canvas(reportContainer,{
         imageTimeout:2000,
         removeContainer:true
        }); 
    }
   
    }());