import { StaffProfile } from "src/staff/staff-profile/entities/staff-profile.entity";
import { Team } from "src/staff/team/entities/team.entity";
import { PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Entity, JoinColumn } from "typeorm";

@Entity('project')
export class Project {


    @PrimaryGeneratedColumn()
    projectid: number;
    
    @Column()
    ProjectName: string;
  
    @Column()
    ProjectStatus: string;


//Relation Name: SYED
//Many to One relation
@ManyToOne(()=> StaffProfile)
@JoinColumn({name:'ProjectName'}) //Associating above column with the other entity
staffProfile: StaffProfile //'staffProfile' is the custom api based name for the above 'createdBy' column.


//Relation Name: JERRY
//Many to One relation
@ManyToOne(()=> Team)
@JoinColumn({name:'Projectid'}) //Associating above column with the other entity
team: Team //'team' is the custom api based name for the above 'createdBy' column.


}

