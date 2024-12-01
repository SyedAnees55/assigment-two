

const Nave= () => {
  return (
    <div className="flex bg-blue-800 h-20 p-10   items-center ">
      <div className="mt-20 rounded-2xl bg-white">
        <img src="/govner.png" alt="govner" width={100} height={100} />
      </div>
      <div className=" text-yellow-200  w-6/12 text-2xl     ml-20" >Tuition Free Program</div>
      <div>
        <ul className="text-white flex  w-6/12 gap-10 ">
            <li>Home</li>
            <li>apply </li>
            <li>Jobs</li>
            <li>Result</li>
            <li>Courses</li>
        </ul>
      </div>
    </div>
  )
}

export default Nave
