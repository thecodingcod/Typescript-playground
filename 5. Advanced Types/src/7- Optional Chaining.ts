interface fetchedData {
  id: string;
  name: string;
  job: IJob | undefined;
}

interface IJob {
  title: string;
  description: string;
}

const fetchedUserData:fetchedData = {
  id: "ul",
  name: "Benali",
  job: undefined,
};

// javascript way to avoid null references
// console.log(fetchedUserData.job && fetchedUserData.job.title);

// type script use the null conditional operator like in c#
// check if the data exists before trying to dig deeper into the object
console.log(fetchedUserData?.job?.title);
