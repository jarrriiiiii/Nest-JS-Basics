import { Auth } from 'src/auth/entities/auth.entity';
import { Team } from 'src/staff/team/entities/team.entity';
import { Project } from 'src/utils/project/entities/project.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';


@Entity('staff-profile')
export class StaffProfile {


  @PrimaryGeneratedColumn()
  authid: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;


  //Relation Name: HARRY
   //One-to-One Relation
  @OneToOne(() => Auth)
  @JoinColumn({name:'authId'}) //name:'authId'
  auth: Auth





//Relation Name: JONNY
//One to Many Relation - We are targetting the 'createdBy' column of the other entity
@OneToMany(()=> Team, team => team.createdBy)
team: Team[] //'team' is the custom api based name


//Relation Name: SYED
//One to Many Relation - We are targetting the 'Project Name' column of the other entity
@OneToMany(()=> Project, project => project.ProjectName)
project: Project[] //'project' is the custom api based name



}