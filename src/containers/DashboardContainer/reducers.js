import { fromJS } from "immutable";

const initialState = fromJS({
  studentsCount: 62,
  avgMark: 62,
  underPerforming: 62,
  finished: 62,
  lectionsLeft: 60,
  hoursSpend: 62,
  studentByType: [
    {
      clr: "#6F52ED",
      title: "Groups of 20 students",
      value: 20,
      per: 30,
    },
  ],
  studentByAvgMark: [
    {
      name: "Abc",
      img:
        "https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-users-icon-png-image_4144740.jpg",
      value: 9.3,
    },
    {
      name: "Abc 2",
      img: "https://www.w3schools.com/howto/img_avatar2.png",
      value: 9.0,
    },
    {
      name: "Abc 2",
      img:
        "http://mybluerobot.com/wp-content/plugins/svg-avatars-generator/data/custom-img/girl.png",
      value: 8.9,
    },
  ],
  loadingStudentsCount: false,
  loadingAvgMark: false,
  loadingUnderPerforming: false,
  loadingFinished: false,
  loadingLectionsLeft: false,
  loadingHoursSpend: false,
  loadingStudentByType: false,
  loadingStudentByAvgMark: false,
});

/* eslint-disable no-fallthrough */
function DashboardReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
/* eslint-enable no-fallthrough */

export default DashboardReducer;
