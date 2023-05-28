import { StaffProfile } from "src/staff/staff-profile/entities/staff-profile.entity";
import { TeamMember } from "src/staff/team-member/entities/team-member.entity";
import { Project } from "src/utils/project/entities/project.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";

@Entity('team')
export class Team {


  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  teamName: string;


@Column()
createdBy:number


//Relation Name: JONNY
//Many to One relation
@ManyToOne(()=> StaffProfile)
@JoinColumn({name:'createdBy'}) //Associating above column with the other entity
staffProfile: StaffProfile //'staffProfile' is the custom api based name for the above 'createdBy' column.


//Relation Name: JERRY
//One to Many Relation - We are targetting the 'Project Name' column of the other entity
@OneToMany(()=> Project, project => project.ProjectName)
project: Project[]


//Relation Name: KHAN
//One to Many Relation - We are targetting the 'Member Name' column of the other entity
@OneToMany(()=> TeamMember, teammember => teammember.memberName)
team: Team[]


}
