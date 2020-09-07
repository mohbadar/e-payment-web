import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as fileSaver from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class FileDownloadService {

    constructor(private httpClient: HttpClient) { }


    /**
    * Downloads the file from the given URL
    * @param filURL id of the file to be downloaded
    *
    */


   doDownload(fileURL): Observable<HttpResponse<Blob>> {
        let headers = new HttpHeaders();
        // headers = headers.append('Accept', 'blob; charset=utf-8');

        return this.httpClient.get(fileURL,
            {
                headers: headers,
                observe: 'response',
                responseType: 'blob',
            }
        )
    }

    saveFile(data: any, fileName?: string) {
        const blob = new Blob([data], { type: 'any' });
        const file = new File([blob], fileName != null ? fileName : 'download',
            { type: 'blob' })
        fileSaver.saveAs(file, fileName);
    }

    download(fileURL) {

        this.doDownload(fileURL).subscribe(data => {

            let filename = "";
            let disposition = data.headers.get('content-disposition');
            if (disposition && disposition.indexOf('filename') !== -1) {
                var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                var matches = filenameRegex.exec(disposition);
                if (matches != null && matches[1]) {
                    filename = matches[1].replace(/['"]/g, '');
                    console.log('file name after processing', filename);
                }
            }
            // const fileName = data.headers.get('filename');
            this.saveFile(data.body, filename);

        })
    }
}