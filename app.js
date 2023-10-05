const articleDiv = document.querySelector('.articles');

const addComponent = (className = undefined, text = undefined)=> {
    const element = document.createElement('div');
    if (className != undefined) {
        element.className = className;
    }
    if (text != undefined) {
        element.textContent = text;
    }
    return element;
};

const addButton = (className = undefined, text = undefined) => {
    const button = document.createElement('button');
    if (className != undefined) {
        button.className = className;
    }
    if (text != undefined) {
        button.textContent = text;
    }
    return button;
};

const addImg = (src, className = undefined) => {
    const img = document.createElement('img');
    img.src = src;
    if (className != undefined) {
        img.classList = className;
    }
    return img;
};


const createCourseBox = (color, title, subtitle, semester) => {
    const courseCard = addComponent('course');

    const bttnDots = addButton("course-bttn-dots");
    bttnDots.style.backgroundColor = color;
    const imgDots = addImg("./icons/dots.svg");
    bttnDots.appendChild(imgDots);
    courseCard.appendChild(bttnDots);

    const backgroundDiv = addComponent();
    backgroundDiv.style.backgroundColor = color;
    courseCard.appendChild(backgroundDiv);

    const courseInfoDiv = addComponent("course-info");
    const courseTitle = addComponent("course-title", title);
    courseTitle.style.color = color;
    courseInfoDiv.appendChild(courseTitle);
    const courseSubtitle = addComponent("course-subtitle font-gray", subtitle);
    courseInfoDiv.appendChild(courseSubtitle);
    const courseSemester = addComponent("course-semester font-gray", semester);
    courseInfoDiv.appendChild(courseSemester);
    courseCard.appendChild(courseInfoDiv);

    const courseBttns = addComponent("course-bttns");
    const courseBttnSpeaker = addButton("course-bttn");
    const courseImgSpeaker = addImg("./icons/megaphone.svg", "course-bttn-img");
    courseBttnSpeaker.appendChild(courseImgSpeaker);
    courseBttns.appendChild(courseBttnSpeaker);
    const courseBttnAssignments = addButton("course-bttn");
    const courseImgAssignments = addImg("./icons/asssignments.svg", "course-bttn-img");
    courseBttnAssignments.appendChild(courseImgAssignments);
    courseBttns.appendChild(courseBttnAssignments);
    const courseBttnDiscussions = addButton("course-bttn");
    const courseImgDiscussions = addImg("./icons/messages.svg", "course-bttn-img");
    courseBttnDiscussions.appendChild(courseImgDiscussions);
    courseBttns.appendChild(courseBttnDiscussions);
    const courseBttnFiles = addButton("course-bttn");
    const courseImgFiles = addImg("./icons/files.svg", "course-bttn-img");
    courseBttnFiles.appendChild(courseImgFiles);
    courseBttns.appendChild(courseBttnFiles);
    courseCard.appendChild(courseBttns);
    return courseCard;
};

articleDiv.appendChild(createCourseBox("purple", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));
articleDiv.appendChild(createCourseBox("lightblue", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));
articleDiv.appendChild(createCourseBox("green", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));
articleDiv.appendChild(createCourseBox("orange", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));
articleDiv.appendChild(createCourseBox("red", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));
articleDiv.appendChild(createCourseBox("aquamarine", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));
articleDiv.appendChild(createCourseBox("brown", 'Asian American Health (Fall 2022)', 'ASAMST 143AC-SEM-001', 'Fall 2022'));



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
