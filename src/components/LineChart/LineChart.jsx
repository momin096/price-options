import { LineChart as Lchart , Line} from "recharts";
const LineChart = () => {

    const students = [
        { id: 1, name: 'Alice', mathMarks: 85 },
        { id: 2, name: 'Bob', mathMarks: 78 },
        { id: 3, name: 'Charlie', mathMarks: 92 },
        { id: 4, name: 'David', mathMarks: 74 },
        { id: 5, name: 'Ella', mathMarks: 88 },
        { id: 6, name: 'Frank', mathMarks: 67 },
        { id: 7, name: 'Grace', mathMarks: 95 },
        { id: 8, name: 'Hannah', mathMarks: 80 },
        { id: 9, name: 'Ian', mathMarks: 72 },
        { id: 10, name: 'Jane', mathMarks: 90 }
      ];
      
    return (
        <div className="container mx-auto p-5">
            <Lchart width={400} height={400} data={students} >
                <Line dataKey='mathMarks' stroke="blue"></Line>
            </Lchart>
        </div>
    );
};

export default LineChart;