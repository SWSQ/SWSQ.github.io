new Vue({
	el:'#notebook',
	data(){
		return{
			notes:JSON.parse(localStorage.getItem('notes')) || [],
			selectedId:localStorage.getItem('selected-id')||null,
		}
	},
	computed:{
		selectedNote () {
      		return this.notes.find(note => note.id === this.selectedId)
    	},

    	notePreview () {
      		return this.selectedNote ? marked(this.selectedNote.content) : ''
    	},
	},
	watch:{
		notes:{
			handler:'saveNotes',
			deep:true,
		},
		selectedId(val){
			localStorage.setItem('selected-id',val)
		},
	},
	methods:{
		//添加笔记
		addNote(){
			const time=Date.now()
			const note={
				id:String(time),
				title:'New note'+(this.notes.length+1),
				content:'**Hi!** This notebook is Using markdown for formatting',
				created:time,
				favorite:false,
			}
			this.notes.push(note)
			this.selectNote(note)
		},
		selectNote(note){
			this.selectedId=note.id
		},
		saveNotes(){
			localStorage.setItem('notes',JSON.stringify(this.notes))
			console.log('Notes saved!',new Date())
		},
	},
	created(){
			this.content=localStorage.getItem('content')||'You can write in ** markdown ** '
	},
})

console.log('restored note:',localStorage.getItem('content'))