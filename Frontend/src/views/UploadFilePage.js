import React from 'react';

const main = (props) => {
    const fileSelected = event => {
        if (!event.target.files[0]) {
            return;
        }

        event.target.files[0].text().then((res) => {
            let lines = res.split('\n');
            const vehicles = [];
            for (const line of lines) {
                if (!line.length) {
                    continue;
                }
                try {
                    let vehicle = JSON.parse(line);
                    vehicles.push(vehicle);
                } catch (err) {
                    console.log('Line is not a valid object: ', line);
                }
            }

            props.setState({vehicles: vehicles, isSelectedFile: true});
        });
    }

    return (
        <div>
            <input type="file"
                   onInput={fileSelected}
            />
        </div>
    )
}

export default main;