import status from '../tables/status.json';

export const statusMigration = (statusNumber) => {
    switch(statusNumber){
        case 1:
            return status[1]
        case 2:
            return status[2]
        case 3:
            return status[3]
        case 4:
            return status[4]
        case 5:
            return status[5]
        case 6:
            return status[6]
        case 7:
            return status[7]
        case 8:
            return status[8]
        case 9:
            return status[9]
        case 10:
            return status[10]
        case 11:
            return status[11]
        case 12:
            return status[12]
        case 13:
            return status[13]
        case 14:
            return status[14]
        case 15:
            return status[15]
        case 16:
            return status[16]
        case 17:
            return status[17]
        case 18:
            return status[18]
    }
}