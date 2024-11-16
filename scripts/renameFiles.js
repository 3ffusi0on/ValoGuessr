import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const subFolder = process.argv[2];
if (!subFolder) {
    console.log('Please specify a subfolder of /public/assets/maps');
    process.exit(1);
}

const directoryPath = path.join(path.dirname(''), `../public/assets/maps/${subFolder}`);

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(file => {
        if (path.extname(file) === '.png') {
            const oldPath = path.join(directoryPath, file);
            const newFileName = uuidv4() + '.png';
            if (newFileName.length === 4) {
                console.log('Error generating new file name');
                return;
            }
            const newPath = path.join(directoryPath, newFileName);

            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    console.log('Error renaming file:', err);
                } else {
                    console.log(`Renamed ${file} to ${newFileName}`);
                }
            });
        }
    });
});
