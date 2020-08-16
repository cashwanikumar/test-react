const min = 2000;
const max = 7000;

export const getStudentCount = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(62);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getAverageMark = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6.8);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getUnderPerforming = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(9);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getFinished = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(83);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getLectionsLeft = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(60);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getHourSpend = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(60);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getStudentAverage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
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
      ]);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const getStudentNumberByMonth = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          label: "Applied",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          backgroundColor: "rgba(255,99,132,0.2)",
          borderColor: "rgba(255,99,132,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(255,99,132,0.4)",
          hoverBorderColor: "rgba(255,99,132,1)",
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Left",
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
      ]);
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};

export const studentByType = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            clr: "#6F52ED",
            title: "Groups of 20 students",
            value: 20,
            per: 30,
          },
          {
            clr: "#ff0000",
            title: "Groups of 10 students",
            value: 20,
            per: 30,
          },
        ],
        graph: {
          labels: ["Red", "Green", "Yellow"],
          datasets: [
            {
              data: [300, 50, 100],
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
          ],
        },
      });
    }, Math.floor(Math.floor(Math.random() * (max - min + 1) + min) + 1));
  });
};
