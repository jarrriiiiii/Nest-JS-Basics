import { StaffProfile } from "src/staff/staff-profile/entities/staff-profile.entity";
import { Team } from "src/staff/team/entities/team.entity";
import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne } from "typeorm";


@Entity('teammember')
export class TeamMember {


    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    memberName: string;
  
    @Column()
    Role: string;



//Relation Name: KHAN
//Many to One relation
@ManyToOne(()=> Team)
@JoinColumn({name:'memberName'}) //Associating above column with the other entity
team: Team //'team' is the custom api based name for the above 'createdBy' column.


}
