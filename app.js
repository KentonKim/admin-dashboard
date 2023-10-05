const articleDiv = document.querySelector('.articles');

const addComponent = (className = "", type= 'div', text = "", src = "") => {
    const element = document.createElement(type);
    element.className = className;
    element.textContent = text;
    if (element.hasAttribute('src')) {
        element.src = src;
    }
    return element;
};

const createCourseBox = (color, title, subtitle, semester) => {
    const courseCard = addComponent('course');

    const bttnDots = addComponent("bttn-dots", "button");
    const imgDots = addComponent('', 'img', '', "./icons/dots.svg");
    bttnDots.appendChild(imgDots);
    courseCard.appendChild(bttnDots);

    const backgroundDiv = addComponent();
    backgroundDiv.style.backgroundColor = color;
    courseCard.appendChild(backgroundDiv);

    const courseInfoDiv = addComponent("course-info");
    const courseTitle = addComponent("course-title", 'div', text = title);
    courseTitle.style.color = color;
    courseInfoDiv.appendChild(courseTitle);
    const courseSubtitle = addComponent("course-subtitle", 'div', text = subtitle);
    courseInfoDiv.appendChild(courseSubtitle);
    const courseSemester = addComponent("course-semester", 'div', text = semester);
    courseInfoDiv.appendChild(courseSemester);
    courseCard.appendChild(courseInfoDiv);

    const courseBttns = addComponent("course-bttns");
    const courseBttnSpeaker = addComponent("course-bttn", "button");
    const courseImgSpeaker = addComponent("course-bttn-img", "img", src= "./icons/megaphone.svg");
    courseBttnSpeaker.appendChild(courseImgSpeaker);
    courseBttns.appendChild(courseBttnSpeaker);
    const courseBttnAssignments = addComponent("course-bttn", "button");
    const courseImgAssignments = addComponent("course-bttn-img", "img", src= "./icons/asssignments.svg");
    courseBttnAssignments.appendChild(courseImgAssignments);
    courseBttns.appendChild(courseBttnAssignments);
    const courseBttnDiscussions = addComponent("course-bttn", "button");
    const courseImgDiscussions = addComponent("course-bttn-img", "img", src= "./icons/messages.svg");
    courseBttnDiscussions.appendChild(courseImgDiscussions);
    courseBttns.appendChild(courseBttnDiscussions);
    const courseBttnFiles = addComponent("course-bttn", "button");
    const courseImgFiles = addComponent("course-bttn-img", "img", src= "./icons/files.svg");
    courseBttnFiles.appendChild(courseImgFiles);
    courseBttns.appendChild(courseBttnFiles);
    courseCard.appendChild(courseBttns);
    return courseCard;
};

articleDiv.appendChild(createCourseBox("white", 'title', 'subtitle', 'semester'));



/* <div class="course">
    <button class="bttn-dots">
        <img src="" alt="dots-icon" srcset="">
    </button>
    <img src="" alt="" class="img-course">
    <div class="info-course">
        <div class="course-title"></div>
        <div class="course-subtitle"></div>
        <div class="course-semester"></div>
        <div class="course-bttns">
            <button class="">
                <img src="" alt="">
            </button>
            <button class="">
                <img src="" alt="">
            </button>
            <button class="">
                <img src="" alt="">
            </button>
            <button class="">
                <img src="" alt="">
            </button>
            <button class="">
                <img src="" alt="">
            </button>
        </div>
    </div>
</div> */
