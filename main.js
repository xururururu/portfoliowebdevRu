window.onload = function(){
    let $homeBtn = $('#homeBtn');
    let $aboutBtn = $('#aboutBtn');
    let $workBtn = $('#workBtn');
    let $contactBtn = $('#contactBtn');

    $homeBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.home').offset().top}, 600);
    });
    $aboutBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.about-spacer').offset().top}, 600);
    });
    $workBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.work-spacer').offset().top}, 600);
    });
    $contactBtn.click(function(){
        $('html,body').animate({'scrollTop': $('.contact-spacer').offset().top}, 600);
    });

    let $paragraph = $('.paragraphs');
    let $scroll = $('.scroll');
    let $title = $('.paragraph-title');
    let $singleParagraph = $('.paragraph-single');
    let windowChange = function(){
        if($(window).width() >= 1200){
            $scroll.removeClass('scroll-show');
        }else{
            $title.removeClass('title-hide');
            $singleParagraph.removeClass('paragraph-show');
        }
    };
    setInterval(windowChange, 1);

    $paragraph.click(function(){
        let $this = $(this);
        let p = $this.attr('id');
        $(`#${p}`).toggleClass('selection');
        if($(window).width() < 1200){
          if ($(`#${p}`).hasClass('selection')){
              $(`.scroll-${$this.attr('id')}`).addClass('scroll-show');
          } else if(!$(`#${p}`).hasClass('selection')){
              $(`.scroll-${$this.attr('id')}`).removeClass('scroll-show');
          };
        }else{
          $(`.title-${p}`).toggleClass('title-hide');
          $(`.single-${p}`).toggleClass('paragraph-show');
        }
    });

    let $projectPic = $('.project-pic');
    let $techUsed = $('.tech-used');

    $projectPic.hover(function(){
        let $this = $(this);
        let index = ($projectPic.length) - $projectPic.index($this);
        if($techUsed.hasClass(`tech-${index}`)){
            $(`.tech-${index}`).toggleClass('show-tech');
            console.log(index);
        }
    });

    let $latestPic = $('#latest-pic');
    let $latestTech = $('#latest-tech');

    $latestPic.hover(function(){
        let $this = $(this);
        $latestTech.toggleClass('show-tech');
    });

    $latestPic.click(function(){
        $('html,body').animate({'scrollTop': $('.work-spacer').offset().top}, 600);
    });

    let $skillSingle = $('.skill-single');
    let $skillName = $('.skill-name');

    $skillSingle.click(function(){
        let $this = $(this);
        if($(window).width() < 1200){
          $this.toggleClass('skillbackground-show');
        }
    });

    $skillName.click(function(){
        let $this = $(this);
        if($(window).width() < 1200){
          $this.toggleClass('skillname-show');
        }
    });

    let $resume = $('.resume');
    let $resumebtn = $('.resume-btn');
    let $closebtn = $('.close-btn');
    let $downloadbtn = $('.download-btn');

    $resumebtn.click(function(){
      if(!$resume.hasClass('resume-show')){
        $resume.addClass('resume-show');
        $closebtn.addClass('btn-show');
        $downloadbtn.addClass('btn-show');
      }else{
        $resume.removeClass('resume-show');
        $closebtn.removeClass('btn-show');
        $downloadbtn.removeClass('btn-show');
      }
    });

    $closebtn.click(function(){
      if(!$resume.hasClass('resume-show')){
        $resume.addClass('resume-show');
        $closebtn.addClass('btn-show');
        $downloadbtn.addClass('btn-show');
      }else{
        $resume.removeClass('resume-show');
        $closebtn.removeClass('btn-show');
        $downloadbtn.removeClass('btn-show');
      }
    });





}
