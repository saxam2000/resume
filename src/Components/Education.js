import React from 'react'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { fieldCd } from '../constants/typeCodes'
import { connect } from 'react-redux'
import SamplePreview from './SamplePreview'
import Preview from './Preview'
import { useHistory } from 'react-router'

function Education (props) {
  const history = useHistory()
  const [EducationHistory, setEducationHistory] = useState(
    props.EducationSection
  )

  console.log(props)

  const onChange = (e, id) => {
    let key = e.target.name
    let val = e.target.value
    let newEducationHistoryArr = [...EducationHistory.EducationHistories]
    newEducationHistoryArr[id] = { ...newEducationHistoryArr[id], [key]: val }
    setEducationHistory({
      ...EducationHistory,
      EducationHistories: newEducationHistoryArr
    })
    props.updateKey(key, val, id)
  }
  const getValue = (key, id) => {
    return EducationHistory.EducationHistories[id][key]
  }
  let EducationState = {
    CLG: '',
    DGRE: '',
    GRYR: '',
    GRDT: '',
    GRCG: '',
    CBOARD: '',
    CCITY: ''
  }

  const addEducation = async () => {
    console.log('button')
    setEducationHistory({
      ...EducationHistory,
      EducationHistories: [
        ...EducationHistory.EducationHistories,
        { id: EducationHistory.EducationHistories.length, ...EducationState }
      ]
    })
    await props.addEducation()
  }
  let labelCss = { fontSize: '1rem', fontWeight: 'bold', margin: '5px' }
  return (
    <div>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      <h1> EDUCATION SECTION </h1>
      <button
              style={{border:"2px solid black", backgroundcolor:"red",height:"2rem",width:"7rem",margin:"0 0 0 1rem"}}
              onClick={() => history.push('/workhistory')}>
        Next{' '}
      </button>
      <button
              style={{border:"2px solid black", backgroundcolor:"red",height:"2rem",width:"7rem",margin:"0 0 0 1rem"}}
 
      onClick={() => history.push('/contact')}> Go back </button>
      </div>
      <div
        className='educationPage '
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          width: '100%'
        }}
      >
        <div
          className='EducationHistories'
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '35%',
            backgroundColor: 'beige',
            alignItems: 'flex-start',
            height: '50%'
          }}
        >
          {' '}
          {props.EducationSection.EducationHistories.map(education => (
            <div
              key={education.id}
              style={{display: 'flex',flexDirection: 'column',width: '100%',border: '0.5px solid #e3d4c2',alignItems: 'flex-start',height: '50%'}}
              className='EducationHtmlForm'
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  margin: '0 0 0 1rem',
                  alignItems: 'flex-start',
                  width: '90%'
                }}
                className='collegeName'
              >
                <label style={labelCss} htmlFor='College'>
                  College Name:
                </label>
                6{' '}
              </div>{' '}
              <div
                style={{
                  display: 'flex',
                  flexWrap: '',
                  width: '100%',
                  flexDirection: 'column',
                  margin: '1rem 0 1rem 1rem',
                  alignItems: 'flex-start'
                }}
                className='DegreeAndCGPA'
              >
                <label style={labelCss} htmlFor='CollegeInfo'>
                  College Info:
                </label>{' '}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap'
                  }}
                  className='DegreeAndCGPA'
                >
                  <TextField
                    size='small'
                    id='outlined-basic'
                    value={getValue(fieldCd.Degree, education.id)}
                    sx={{
                      width: '48%',
                      margin: '1px 6% 0 0'
                    }}
                    name={fieldCd.Degree}
                    onChange={e => onChange(e, education.id)}
                    label='Degree'
                    variant='outlined'
                  />
                  <TextField
                    size='small'
                    id='outlined-basic'
                    value={getValue(fieldCd.GraduationCGPA, education.id)}
                    name={fieldCd.GraduationCGPA}
                    onChange={e => onChange(e, education.id)}
                    sx={{
                      width: '48%'
                      // margin:"0 1rem 0 0"
                    }}
                    label='GraduationCGPA'
                    variant='outlined'
                  />
                </div>{' '}
              </div>{' '}
              <div
                style={{
                  display: 'flex',
                  flexWrap: '',
                  width: '100%',
                  flexDirection: 'column',
                  margin: '1rem 0 1rem 1rem',
                  alignItems: 'flex-start'
                }}
                className='graduationYearAndDate'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap'
                  }}
                  className='fnameAndLname'
                >
                  <TextField
                    size='small'
                    id='outlined-basic'
                    value={getValue(fieldCd.CollegeAdmission, education.id)}
                    sx={{
                      width: '48%',
                      margin: '1px 6% 0 0'
                    }}
                    name={fieldCd.CollegeAdmission}
                    onChange={e => onChange(e, education.id)}
                    label='Admission year'
                    variant='outlined'
                  />
                  <TextField
                    size='small'
                    id='outlined-basic'
                    value={getValue(fieldCd.GraduationDate, education.id)}
                    name={fieldCd.GraduationDate}
                    onChange={e => onChange(e, education.id)}
                    sx={{
                      width: '48%'
                      // margin:"0 1rem 0 0"
                    }}
                    label='GraduationDate'
                    variant='outlined'
                  />
                </div>{' '}
              </div>{' '}
              <div
                style={{
                  display: 'flex',
                  flexWrap: '',
                  width: '100%',
                  flexDirection: 'column',
                  margin: '1rem 0 1rem 1rem',
                  alignItems: 'flex-start'
                }}
                className='CollegeCityAndCollegeBoard'
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap'
                  }}
                  className='fnameAndLname'
                >
                  <TextField
                    size='small'
                    id='outlined-basic'
                    value={getValue(fieldCd.CollegeCity, education.id)}
                    sx={{
                      width: '48%',
                      margin: '1px 6% 0 0'
                    }}
                    name={fieldCd.CollegeCity}
                    onChange={e => onChange(e, education.id)}
                    label='CollegeCity'
                    variant='outlined'
                  />
                  <TextField
                    size='small'
                    id='outlined-basic'
                    value={getValue(fieldCd.CollegeBoard, education.id)}
                    name={fieldCd.CollegeBoard}
                    onChange={e => onChange(e, education.id)}sx={{width: '48%'}}label='CollegeBoard'variant='outlined'
                  />
                </div>{' '}
              </div>{' '}
            </div>
          ))}{' '}
          <button onClick={() => addEducation()}> addEducation </button>{' '}
        </div>{' '}
        <Preview
          ContactSection={props.ContactSection}
          DocumentReducer={props.DocumentReducer}
          WorkSection={props.WorkSection}
          EducationSection={props.EducationSection}
        ></Preview>{' '}
      </div>{' '}
    </div>
  )
}
const mapStateToProps = store => {
  return store
}
const mapDispatchToProps = dispatch => {
  return {
    updateKey: (key, val, id) => {
      console.log('dispatch', key, val)
      return dispatch({
        type: 'UPDATEEDUCATIONKEY',
        payload: { key: key, val: val, id: id }
      })
    },
    addEducation: () => dispatch({ type: 'ADDEDUCATION' })
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Education)
