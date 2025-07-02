import { LineChart as MuiLineChart } from '@mui/x-charts';
import PropTypes from 'prop-types';

LineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.number),
    labels: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    height: PropTypes.number,
    className: PropTypes.string,
};

function LineChart({
    data = [2, 5.5, 2, 8.5, 1.5, 5],
    labels = [1, 2, 3, 5, 8, 10],
    height = 300,
    className = ''
}) {
    return (
        <div className={className}>
            <MuiLineChart
                xAxis={[{ data: labels }]}
                series={[
                    {
                        data,
                        area: true,
                        curve: 'natural',
                        showMark: true,
                        color: '#6366f1', // azul como en la imagen
                    },
                ]}
                height={height}
                sx={{
                    backgroundColor: '', // fondo gris oscuro
                    '.MuiLineElement-root': {
                        strokeWidth: 2,
                    },
                    '.MuiMarkElement-root': {
                        stroke: '#000', // borde negro
                        strokeWidth: 1,
                    },
                    '.MuiAreaElement-root': {
                        fillOpacity: 0.8,
                    },
                }}
            />
        </div>
    );
}

export default LineChart;
