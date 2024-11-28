import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Charpter = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      const res = await axios.get(
        `https://api.codingthailand.com/api/course/${id}`
      );
      setData(res.data.data); // เก็บข้อมูลใน state
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Chapter Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {data.map((c) => (
          <ChapterCouse
            key={c.id} //เก็บค่าของ ของแต่ละตัว
            title={c.ch_title}
            url={c.ch_url}
            view={c.ch_view}
            timetotal={c.ch_timetotal}
          />
        ))}
      </div>
    </div>
  );
};
const ChapterCouse = (props) => { // เรียก ใช้ props กับ ของแต่ละตัว
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
      <h2 className="text-lg font-medium text-gray-800 mb-4 text-center">
        {props.title}
      </h2>
      <iframe
        src={`https://www.youtube.com/embed/${props.url}`} frameBorder={0} allowFullScreenclassName="w-full aspect-video rounded-lg mb-4"></iframe>
      <div className="text-gray-600 text-sm">
        <p><span className="font-bold">Views:</span> {props.view}</p>
        <p><span className="font-bold">Duration:</span> {props.timetotal}</p>
      </div>
    </div>
  );
};

export default Charpter