export class Project
{
    title: string;
    description: string;
    creationDate: Date;
    creatorName: string;
    creatorSurname: string;
    tags: string[];
    id: string;
    url: string;
    email: string;

    constructor(title: string, description: string, creationDate: Date, creatorName: string, creatorSurname: string, tags: string[], url: string, email : string)
    {
        this.id = Math.floor(Math.random()*100000000000).toString()
        this.title = title
        this.description = description
        this.creationDate = creationDate
        this.creatorName = creatorName
        this.creatorSurname = creatorSurname
        this.tags = tags
        this.url = url
        this.email = email
    }


}